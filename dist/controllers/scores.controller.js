"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresController = void 0;
const scores_service_1 = require("../services/scores.service");
class ScoresController {
    constructor() {
        this.service = new scores_service_1.ScoresService();
        this.getAll = async (req, res, next) => {
            try {
                const page = Number(req.query.page) || 1;
                const limit = Number(req.query.limit) || 20;
                const result = await this.service.getAll(page, limit);
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getBySbd = async (req, res, next) => {
            try {
                const sbd = Number(req.params.sbd);
                // console.log("sbd", sbd);
                if (isNaN(sbd)) {
                    return res.status(400).json({ statusCode: 400, message: "Invalid sbd parameter" });
                }
                const result = await this.service.getBySbd(sbd);
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getReport = async (req, res, next) => {
            try {
                const result = await this.service.getReport();
                res.status(200).json({
                    status: "success",
                    data: result
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.getTop10GroupA = async (req, res, next) => {
            try {
                const result = await this.service.getTop10GroupA();
                res.status(200).json({
                    status: "success",
                    data: result
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.ScoresController = ScoresController;
//# sourceMappingURL=scores.controller.js.map