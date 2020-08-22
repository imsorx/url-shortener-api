import { Request, NextFunction, Response } from "express";

export default interface MiddlewareInterface {
    (req: Request, res: Response, next: NextFunction): void
}