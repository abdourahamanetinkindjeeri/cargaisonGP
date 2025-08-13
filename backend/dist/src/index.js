"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const authService_1 = require("../app/utils/authService"); // importe ta fonction réelle
const PORT = 4000;
function sendJSON(res, obj, status = 200) {
    const data = JSON.stringify(obj);
    res.writeHead(status, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Autoriser front en local
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end(data);
}
async function parseJsonBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            if (!body)
                return resolve({});
            try {
                resolve(JSON.parse(body));
            }
            catch {
                resolve({});
            }
        });
        req.on("error", (err) => reject(err));
    });
}
const server = http_1.default.createServer(async (req, res) => {
    if (req.method === "OPTIONS") {
        res.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        });
        res.end();
        return;
    }
    if (req.method === "POST" && req.url === "/login") {
        try {
            const body = await parseJsonBody(req);
            const { email, password } = body;
            if (!email || !password) {
                sendJSON(res, { success: false, message: "Email et mot de passe requis" }, 400);
                return;
            }
            const result = await (0, authService_1.login)(email, password);
            sendJSON(res, result, result.success ? 200 : 401);
        }
        catch (error) {
            console.error("Erreur dans /login:", error);
            sendJSON(res, { success: false, message: "Erreur serveur" }, 500);
        }
        return;
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
});
server.listen(PORT, () => {
    console.log(`API backend démarrée sur http://localhost:${PORT}`);
});
