"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = void 0;
// app/utils/processData
const fetchData_1 = require("./fetchData");
const processData = async (url, searchKey, searchValue) => {
    try {
        const data = await (0, fetchData_1.fetchData)(url);
        return (data.find((item) => {
            const value = item[searchKey];
            if (typeof value === "string") {
                return value
                    .toLowerCase()
                    .includes(String(searchValue).toLowerCase());
            }
            return value === searchValue;
        }) || null);
    }
    catch (error) {
        console.error("Erreur de traitement des données :", error.message);
        return null;
    }
};
exports.processData = processData;
