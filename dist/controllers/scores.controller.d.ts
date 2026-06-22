import { Request, Response, NextFunction } from "express";
export declare class ScoresController {
    private service;
    getAll: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getBySbd: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getReport: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTop10GroupA: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
