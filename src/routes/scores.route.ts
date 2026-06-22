import { Router } from "express";
import { ScoresController } from "../controllers/scores.controller";

const router = Router();

const controller = new ScoresController();

router.get("/report", controller.getReport);

router.get("/", controller.getAll);

router.get("/:sbd", controller.getBySbd);

router.get("/top10/a", controller.getTop10GroupA);

export default router;
