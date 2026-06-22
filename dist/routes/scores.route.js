"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scores_controller_1 = require("../controllers/scores.controller");
const router = (0, express_1.Router)();
const controller = new scores_controller_1.ScoresController();
router.get("/report", controller.getReport);
router.get("/", controller.getAll);
router.get("/:sbd", controller.getBySbd);
router.get("/top10/a", controller.getTop10GroupA);
exports.default = router;
//# sourceMappingURL=scores.route.js.map