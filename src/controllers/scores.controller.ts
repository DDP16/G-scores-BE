import { Request, Response, NextFunction } from "express";

import { ScoresService } from "../services/scores.service";

export class ScoresController {
  private service = new ScoresService();

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query.page) || 1;

      const limit = Number(req.query.limit) || 20;

      const result = await this.service.getAll(page, limit);

      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  getBySbd = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sbd = Number(req.params.sbd);
      // console.log("sbd", sbd);

      if (isNaN(sbd)) {
        return res.status(400).json({ statusCode: 400, message: "Invalid sbd parameter" });
      }

      const result = await this.service.getBySbd(sbd);

      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.create(req.body);

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.update(Number(req.params.sbd), req.body);

      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.delete(Number(req.params.sbd));

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}
