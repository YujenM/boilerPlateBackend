"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = require("express-rate-limit");
const http_status_1 = __importDefault(require("http-status"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        status: http_status_1.default.TOO_MANY_REQUESTS,
        message: "Too many requests",
    },
});
app.use(limiter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
