"use strict";
// src/domain/BM/services/VietQRGenerator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.VietQRGenerator = void 0;
class VietQRGenerator {
    /**
     * Hàm public sinh ra payload VietQR (string) để FE dùng
     * với component QR (VD: react-qr-code).
     */
    static generatePayload(config, payment) {
        const { bin, accountNumber, accountName = 'EDUCO', merchantCity = 'HANOI', serviceCode = 'QRIBFTTA', isStatic = true, } = config;
        if (!bin || !accountNumber) {
            throw new Error('VietQRGenerator: bin và accountNumber là bắt buộc');
        }
        // 1. Root TLVs (chưa có CRC)
        const rootParts = [];
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
    static buildMerchantAccountInfo(bin, accountNumber, serviceCode) {
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
    static buildAdditionalData(payment) {
        const { description, subscriptionId } = payment;
        let text = '';
        if (subscriptionId) {
            text += `SUB#${subscriptionId}`;
        }
        if (description) {
            if (text.length > 0)
                text += ' ';
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
    static tlv(tag, value) {
        const len = value.length.toString().padStart(2, '0');
        return `${tag}${len}${value}`;
    }
    /**
     * Normalize chuỗi về ASCII cơ bản, loại bỏ dấu tiếng Việt
     * để tránh lỗi / không tương thích ở một số bank.
     */
    static normalizeAscii(input) {
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
    static computeCRC16CCITT(payload) {
        let crc = 0xffff;
        const polynomial = 0x1021;
        for (let i = 0; i < payload.length; i++) {
            const byte = payload.charCodeAt(i);
            crc ^= byte << 8;
            for (let bit = 0; bit < 8; bit++) {
                if ((crc & 0x8000) !== 0) {
                    crc = ((crc << 1) ^ polynomial) & 0xffff;
                }
                else {
                    crc = (crc << 1) & 0xffff;
                }
            }
        }
        return crc.toString(16).toUpperCase().padStart(4, '0');
    }
}
exports.VietQRGenerator = VietQRGenerator;
VietQRGenerator.VIETQR_AID = 'A000000727';
VietQRGenerator.COUNTRY_CODE = 'VN';
VietQRGenerator.CURRENCY_704 = '704';
