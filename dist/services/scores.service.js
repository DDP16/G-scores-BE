"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresService = void 0;
const scores_repository_1 = require("../repositories/scores.repository");
const errors_1 = require("../utils/errors");
class ScoresService {
    constructor() {
        this.repository = new scores_repository_1.ScoresRepository();
    }
    async getAll(page = 1, limit = 20) {
        return this.repository.findAll(page, limit);
    }
    async getBySbd(sbd) {
        const { data } = await this.repository.findBySbd(sbd);
        if (!data)
            throw new errors_1.NotFoundError({ message: `Score with the given SBD ${sbd} not found` });
        return data;
    }
    async getReport() {
        return this.repository.getReport();
    }
    async getTop10GroupA() {
        return this.repository.getTop10GroupA();
    }
}
exports.ScoresService = ScoresService;
//# sourceMappingURL=scores.service.js.map