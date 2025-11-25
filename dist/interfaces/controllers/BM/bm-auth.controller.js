"use strict";
// controllers/BM/bm-auth.controller.ts
// Lưu ý: tên use-case ở đây là skeleton, anh có thể đổi cho khớp với src/application/BM
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmAuthController = void 0;
// TODO: cập nhật theo tên thực tế của anh
// import {
//   RegisterParentAndStudentUseCase,
//   LoginUseCase,
//   LogoutUseCase,
//   RefreshTokenUseCase,
// } from '../../application/BM';
class BmAuthController {
    // constructor(private readonly registerUC = new RegisterParentAndStudentUseCase(), ...)
    constructor() { }
    async registerParentAndStudent(_req, res) {
        try {
            // const result = await this.registerUC.execute(req.body);
            // res.json(result);
            res.status(501).json({ message: 'RegisterParentAndStudent not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('registerParentAndStudent error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async login(_req, res) {
        try {
            // const result = await this.loginUC.execute(req.body);
            // res.json(result);
            res.status(501).json({ message: 'Login not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('login error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async logout(_req, res) {
        try {
            // const result = await this.logoutUC.execute({ token: req.body.refreshToken });
            // res.json(result);
            res.status(501).json({ message: 'Logout not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('logout error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async refreshToken(_req, res) {
        try {
            // const result = await this.refreshTokenUC.execute({ refreshToken: req.body.refreshToken });
            // res.json(result);
            res.status(501).json({ message: 'RefreshToken not implemented in controller skeleton' });
        }
        catch (err) {
            console.error('refreshToken error', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.BmAuthController = BmAuthController;
