"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
exports.login = login;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const generateToken = () => Math.random().toString(36).substring(2, 15);
exports.generateToken = generateToken;
async function login(email, password) {
    const dbPath = path_1.default.resolve(__dirname, '../../data/db.json');
    const raw = await fs_1.promises.readFile(dbPath, 'utf-8');
    const db = JSON.parse(raw);
    const user = db.users.find((u) => u.email === email);
    if (!user || user.password !== password) {
        return { success: false, message: 'Email ou mot de passe incorrect' };
    }
    const token = (0, exports.generateToken)();
    const { password: _, ...safeUser } = user;
    return { success: true, token, user: safeUser, message: 'Connexion réussie' };
}
