"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_routes_1 = __importDefault(require("./books.routes"));
const router = (0, express_1.Router)();
router.use("/books", books_routes_1.default);
exports.default = router;
