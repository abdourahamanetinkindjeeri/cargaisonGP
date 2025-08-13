"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_1 = require("../auth");
const url_1 = require("../url");
const processData_1 = require("./processData");
const login = async (email, password) => {
    const user = await (0, processData_1.processData)(url_1.BASE_URL + "/users", "email", email);
    if (!user || user.password !== password) {
        return { success: false, message: "Email ou mot de passe incorrect" };
    }
    const token = (0, auth_1.generateToken)();
    const { password: _, ...safeUser } = user;
    return {
        success: true,
        token,
        user: safeUser,
        message: "Connexion réussie",
    };
};
exports.login = login;
