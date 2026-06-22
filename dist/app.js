"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scores_route_1 = __importDefault(require("./routes/scores.route"));
const errors_1 = require("./utils/errors");
const cors_1 = __importDefault(require("cors"));
const allowedOrigins = ["http://localhost:5173"];
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        else {
            return callback(null, false);
        }
    },
    credentials: true,
    exposedHeaders: ["Authorization"],
}));
app.use(express_1.default.json());
app.use("/api/gscores", scores_route_1.default);
app.use((err, req, res, next) => {
    if (err instanceof errors_1.AppError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message,
            status: err.status,
        });
    }
    res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
        status: "INTERNAL_SERVER_ERROR",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map