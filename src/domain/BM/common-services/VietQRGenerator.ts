// src/domain/BM/services/VietQRGenerator.ts

/**
 * VietQRGenerator
 *
 * Sinh payload QR theo chuẩn EMVCo + VietQR/NAPAS để app Mobile Banking
 * ở Việt Nam có thể quét và thực hiện chuyển khoản.
 *
 * Cấu trúc chính:
 * - 00: Payload Format Indicator   -> "01"
 * - 01: Point of Initiation Method -> "11" (static) hoặc "12" (dynamic)
 * - 38: Merchant Account Information (VietQR – NAPAS)
 *      - 00: AID  = "A000000727"
 *      - 01: Beneficiary (BIN + AccountNo)
 *      - 02: Service Code ("QRIBFTTA" cho chuyển khoản tài khoản)
 * - 53: Transaction Currency -> "704" (VND)
 * - 54: Transaction Amount   -> số tiền (tuỳ chọn)
 * - 58: Country Code         -> "VN"
 * - 59: Merchant Name        -> Tên đơn vị nhận
 * - 60: Merchant City        -> Thành phố
 * - 62: Additional Data Field Template (Optional)
 *      - 08: Purpose of Transaction (ví dụ chứa subscriptionId + mô tả)
 * - 63: CRC (CRC16/CCITT-FALSE)
 */

export interface VietQRStaticConfig {
  /**
   * BIN NAPAS của ngân hàng nhận (6 số, ví dụ: "970436")
   */
  bin: string;

  /**
   * Số tài khoản nhận tiền
   */
  accountNumber: string;

  /**
   * Tên đơn vị nhận (Merchant Name)
   */
  accountName?: string;

  /**
   * Thành phố / địa điểm (Merchant City)
   */
  merchantCity?: string;

  /**
   * Service code: "QRIBFTTA" (tài khoản) hoặc "QRIBFTTC" (thẻ)
   * Mặc định: "QRIBFTTA"
   */
  serviceCode?: string;

  /**
   * Static = true => 01 = "11"
   * Dynamic = false => 01 = "12"
   *
   * Thường QR thu tiền tĩnh (không thay đổi) dùng "11".
   */
  isStatic?: boolean;
}

export interface VietQRPaymentData {
  /**
   * Số tiền thanh toán (VND). Nếu không truyền, QR sẽ là
   * QR "không cố định số tiền" (user tự nhập).
   */
  amount?: number;

  /**
   * Thông tin mô tả / nội dung chuyển khoản.
   * Ở đây bạn có thể encode subscriptionId, ví dụ:
   * "EDUCO SUB#123456"
   */
  description?: string;

  /**
   * Subscription ID cho khóa học – nên được nhét
   * vào description để backend đọc lại khi bank callback
   * hoặc đối soát giao dịch.
   */
  subscriptionId?: string;
}

export class VietQRGenerator {
  private static readonly VIETQR_AID = 'A000000727';
  private static readonly COUNTRY_CODE = 'VN';
  private static readonly CURRENCY_704 = '704';

  /**
   * Hàm public sinh ra payload VietQR (string) để FE dùng
   * với component QR (VD: react-qr-code).
   */
  static generatePayload(
    config: VietQRStaticConfig,
    payment: VietQRPaymentData,
  ): string {
    const {
      bin,
      accountNumber,
      accountName = 'EDUCO',
      merchantCity = 'HANOI',
      serviceCode = 'QRIBFTTA',
      isStatic = true,
    } = config;

    if (!bin || !accountNumber) {
      throw new Error('VietQRGenerator: bin và accountNumber là bắt buộc');
    }

    // 1. Root TLVs (chưa có CRC)
    const rootParts: string[] = [];

    // 00 – Payload Format Indicator (luôn "01")
    rootParts.push(this.tlv('00', '01'));

    // 01 – Point of Initiation Method: "11" static, "12" dynamic
    rootParts.push(this.tlv('01', isStatic ? '11' : '12'));

    // 38 – Merchant Account Information (VietQR)
    const merchantAccountInfo = this.buildMerchantAccountInfo(bin, accountNumber, serviceCode);
    rootParts.push(this.tlv('38', merchantAccountInfo));

    // 53 – Transaction Currency (704 = VND)
    rootParts.push(this.tlv('53', this.CURRENCY_704));

    // 54 – Transaction Amount (optional)
    if (typeof payment.amount === 'number' && payment.amount > 0) {
      // EMV yêu cầu amount là chuỗi số, có thể có phần thập phân.
      // Với VND thường dùng số nguyên, không có dấu chấm.
      const amountStr = Math.round(payment.amount).toString();
      rootParts.push(this.tlv('54', amountStr));
    }

    // 58 – Country Code (VN)
    rootParts.push(this.tlv('58', this.COUNTRY_CODE));

    // 59 – Merchant Name
    rootParts.push(this.tlv('59', this.normalizeAscii(accountName).toUpperCase()));

    // 60 – Merchant City
    rootParts.push(this.tlv('60', this.normalizeAscii(merchantCity).toUpperCase()));

    // 62 – Additional Data Field Template (optional – dùng để chứa subscriptionId + description)
    const additionalValue = this.buildAdditionalData(payment);
    if (additionalValue) {
      rootParts.push(this.tlv('62', additionalValue));
    }

    // Ghép các phần lại, thêm "6304" (Tag + Length của CRC) trước khi tính CRC
    const payloadWithoutCRC = rootParts.join('') + '6304';

    const crc = this.computeCRC16CCITT(payloadWithoutCRC);

    // Trả về payload hoàn chỉnh
    return payloadWithoutCRC + crc;
  }

  /**
   * Tạo Merchant Account Information cho tag 38:
   *
   * 38:
   *   00: "A000000727"
   *   01: BIN + AccountNo (ví dụ "9704360123456789")
   *   02: "QRIBFTTA" (chuyển khoản tài khoản)
   */
  private static buildMerchantAccountInfo(
    bin: string,
    accountNumber: string,
    serviceCode: string,
  ): string {
    const guid = this.tlv('00', this.VIETQR_AID);
    const beneficiary = this.tlv('01', `${bin}${accountNumber}`);
    const svc = this.tlv('02', serviceCode);

    return `${guid}${beneficiary}${svc}`;
  }

  /**
   * Xây dựng Additional Data (ID 62) – bên trong có:
   *  - 08: Purpose of Transaction
   *
   * Ta có thể encode: "EDUCO SUB#<subscriptionId> <description>"
   */
  private static buildAdditionalData(payment: VietQRPaymentData): string | null {
    const { description, subscriptionId } = payment;

    let text = '';

    if (subscriptionId) {
      text += `SUB#${subscriptionId}`;
    }

    if (description) {
      if (text.length > 0) text += ' ';
      text += description;
    }

    if (!text) {
      return null;
    }

    const normalized = this.normalizeAscii(text);

    // Tag 08 – Purpose of Transaction
    return this.tlv('08', normalized);
  }

  /**
   * Hàm TLV chung: Tag(2) + Length(2) + Value
   */
  private static tlv(tag: string, value: string): string {
    const len = value.length.toString().padStart(2, '0');
    return `${tag}${len}${value}`;
  }

  /**
   * Normalize chuỗi về ASCII cơ bản, loại bỏ dấu tiếng Việt
   * để tránh lỗi / không tương thích ở một số bank.
   */
  private static normalizeAscii(input: string): string {
    // Loại dấu Unicode rồi chỉ giữ lại khoảng trắng & ký tự in được.
    return input
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // bỏ dấu
      .replace(/[^\x20-\x7E]/g, ''); // bỏ ký tự ngoài ASCII in được
  }

  /**
   * CRC16/CCITT-FALSE
   * - Polynomial: 0x1021
   * - Initial value: 0xFFFF
   * - No reflection
   * - XorOut: 0x0000
   * - Input: payload từ đầu đến trước "6304"
   */
  private static computeCRC16CCITT(payload: string): string {
    let crc = 0xffff;
    const polynomial = 0x1021;

    for (let i = 0; i < payload.length; i++) {
      const byte = payload.charCodeAt(i);
      crc ^= byte << 8;
      for (let bit = 0; bit < 8; bit++) {
        if ((crc & 0x8000) !== 0) {
          crc = ((crc << 1) ^ polynomial) & 0xffff;
        } else {
          crc = (crc << 1) & 0xffff;
        }
      }
    }

    return crc.toString(16).toUpperCase().padStart(4, '0');
  }
}
