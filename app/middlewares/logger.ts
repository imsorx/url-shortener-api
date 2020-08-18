import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, resp: Response, next: NextFunction) => {

    console.log(req.method, req.path, req.ip);
    next();
}

export default loggerMiddleware;