"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erreur réseau...");
        }
        return await response.json();
    }
    catch (e) {
        throw new Error(`Erreur : ${e.message}`);
    }
};
exports.fetchData = fetchData;
