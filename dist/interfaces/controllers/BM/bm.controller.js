"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bmController = exports.BmController = void 0;
class BmController {
    // AUTH & ACCOUNT
    async registerParent(req, res) {
        res.json({ message: 'registerParent not implemented yet' });
    }
    async verifyOtp(req, res) {
        res.json({ message: 'verifyOtp not implemented yet' });
    }
    async login(req, res) {
        res.json({ message: 'login not implemented yet' });
    }
    async logout(req, res) {
        res.json({ message: 'logout not implemented yet' });
    }
    async refreshToken(req, res) {
        res.json({ message: 'refreshToken not implemented yet' });
    }
    async forgotPassword(req, res) {
        res.json({ message: 'forgotPassword not implemented yet' });
    }
    async resetPassword(req, res) {
        res.json({ message: 'resetPassword not implemented yet' });
    }
    // PARENT/STUDENT/PROFILE
    async createStudentForParent(req, res) {
        res.json({ message: 'createStudentForParent not implemented yet' });
    }
    async listParentStudents(req, res) {
        res.json({ message: 'listParentStudents not implemented yet' });
    }
    async getStudentDetail(req, res) {
        res.json({ message: 'getStudentDetail not implemented yet' });
    }
    async updateStudentProfile(req, res) {
        res.json({ message: 'updateStudentProfile not implemented yet' });
    }
    async getMyProfile(req, res) {
        res.json({ message: 'getMyProfile not implemented yet' });
    }
    async updateMyProfile(req, res) {
        res.json({ message: 'updateMyProfile not implemented yet' });
    }
    // GROUPS / CLASSES
    async listClasses(req, res) {
        res.json({ message: 'listClasses not implemented yet' });
    }
    async createGroup(req, res) {
        res.json({ message: 'createGroup not implemented yet' });
    }
    async addGroupMember(req, res) {
        res.json({ message: 'addGroupMember not implemented yet' });
    }
    async removeGroupMember(req, res) {
        res.json({ message: 'removeGroupMember not implemented yet' });
    }
    async getGroupDetail(req, res) {
        res.json({ message: 'getGroupDetail not implemented yet' });
    }
    // ORDERS & PAYMENTS & SUBSCRIPTIONS
    async createOrder(req, res) {
        res.json({ message: 'createOrder not implemented yet' });
    }
    async getOrderDetail(req, res) {
        res.json({ message: 'getOrderDetail not implemented yet' });
    }
    async initPayment(req, res) {
        res.json({ message: 'initPayment not implemented yet' });
    }
    async paymentWebhook(req, res) {
        res.json({ message: 'paymentWebhook not implemented yet' });
    }
    async cancelSubscription(req, res) {
        res.json({ message: 'cancelSubscription not implemented yet' });
    }
    async blockSubscription(req, res) {
        res.json({ message: 'blockSubscription not implemented yet' });
    }
    // NOTIFICATION GATEWAY
    async sendEmail(req, res) {
        res.json({ message: 'sendEmail not implemented yet' });
    }
    async sendSms(req, res) {
        res.json({ message: 'sendSms not implemented yet' });
    }
    async sendMobilePush(req, res) {
        res.json({ message: 'sendMobilePush not implemented yet' });
    }
}
exports.BmController = BmController;
exports.bmController = new BmController();
