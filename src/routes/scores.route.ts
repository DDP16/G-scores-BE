import { Router } from "express";
import { ScoresController } from "../controllers/scores.controller";

const router = Router();

const controller = new ScoresController();

router.get("/", controller.getAll);

router.get("/:sbd", controller.getBySbd);

router.post("/", controller.create);

router.put("/:sbd", controller.update);

router.delete("/:sbd", controller.delete);

export default router;
