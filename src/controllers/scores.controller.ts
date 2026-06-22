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

  getReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getReport();

      res.status(200).json({
        status: "success",
        data: result
      });
    } catch (error) {
      next(error);
    }
  };

  getTop10GroupA = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getTop10GroupA();

      res.status(200).json({
        status: "success",
        data: result
      });
    } catch (error) {
      next(error);
    }
  };
}
