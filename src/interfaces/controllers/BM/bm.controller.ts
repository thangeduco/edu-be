import { Request, Response } from 'express';

export class BmController {
  // AUTH & ACCOUNT
  async registerParent(req: Request, res: Response) {
    res.json({ message: 'registerParent not implemented yet' });
  }

  async verifyOtp(req: Request, res: Response) {
    res.json({ message: 'verifyOtp not implemented yet' });
  }

  async login(req: Request, res: Response) {
    res.json({ message: 'login not implemented yet' });
  }

  async logout(req: Request, res: Response) {
    res.json({ message: 'logout not implemented yet' });
  }

  async refreshToken(req: Request, res: Response) {
    res.json({ message: 'refreshToken not implemented yet' });
  }

  async forgotPassword(req: Request, res: Response) {
    res.json({ message: 'forgotPassword not implemented yet' });
  }

  async resetPassword(req: Request, res: Response) {
    res.json({ message: 'resetPassword not implemented yet' });
  }

  // PARENT/STUDENT/PROFILE
  async createStudentForParent(req: Request, res: Response) {
    res.json({ message: 'createStudentForParent not implemented yet' });
  }

  async listParentStudents(req: Request, res: Response) {
    res.json({ message: 'listParentStudents not implemented yet' });
  }

  async getStudentDetail(req: Request, res: Response) {
    res.json({ message: 'getStudentDetail not implemented yet' });
  }

  async updateStudentProfile(req: Request, res: Response) {
    res.json({ message: 'updateStudentProfile not implemented yet' });
  }

  async getMyProfile(req: Request, res: Response) {
    res.json({ message: 'getMyProfile not implemented yet' });
  }

  async updateMyProfile(req: Request, res: Response) {
    res.json({ message: 'updateMyProfile not implemented yet' });
  }

  // GROUPS / CLASSES
  async listClasses(req: Request, res: Response) {
    res.json({ message: 'listClasses not implemented yet' });
  }

  async createGroup(req: Request, res: Response) {
    res.json({ message: 'createGroup not implemented yet' });
  }

  async addGroupMember(req: Request, res: Response) {
    res.json({ message: 'addGroupMember not implemented yet' });
  }

  async removeGroupMember(req: Request, res: Response) {
    res.json({ message: 'removeGroupMember not implemented yet' });
  }

  async getGroupDetail(req: Request, res: Response) {
    res.json({ message: 'getGroupDetail not implemented yet' });
  }

  // PRODUCT CATALOG
  async listProducts(req: Request, res: Response) {
    res.json({ message: 'listProducts not implemented yet' });
  }

  async getProductDetail(req: Request, res: Response) {
    res.json({ message: 'getProductDetail not implemented yet' });
  }

  async listStudentSubscriptions(req: Request, res: Response) {
    res.json({ message: 'listStudentSubscriptions not implemented yet' });
  }

  // ORDERS & PAYMENTS & SUBSCRIPTIONS
  async createOrder(req: Request, res: Response) {
    res.json({ message: 'createOrder not implemented yet' });
  }

  async getOrderDetail(req: Request, res: Response) {
    res.json({ message: 'getOrderDetail not implemented yet' });
  }

  async initPayment(req: Request, res: Response) {
    res.json({ message: 'initPayment not implemented yet' });
  }

  async paymentWebhook(req: Request, res: Response) {
    res.json({ message: 'paymentWebhook not implemented yet' });
  }

  async cancelSubscription(req: Request, res: Response) {
    res.json({ message: 'cancelSubscription not implemented yet' });
  }

  async blockSubscription(req: Request, res: Response) {
    res.json({ message: 'blockSubscription not implemented yet' });
  }

  // NOTIFICATION GATEWAY
  async sendEmail(req: Request, res: Response) {
    res.json({ message: 'sendEmail not implemented yet' });
  }

  async sendSms(req: Request, res: Response) {
    res.json({ message: 'sendSms not implemented yet' });
  }

  async sendMobilePush(req: Request, res: Response) {
    res.json({ message: 'sendMobilePush not implemented yet' });
  }
}

export const bmController = new BmController();
