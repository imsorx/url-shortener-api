import ControllerInterface from './controller.interface';
import express, { Router, Response, Request } from 'express';
import * as path from 'path';
import MiddlewareInterface from 'app/middlewares/middleware.interface';

export default class HomeController implements ControllerInterface {

    public router: Router = express.Router();
    middlewares: MiddlewareInterface[] | undefined;

    constructor(middlewares?: MiddlewareInterface[]) {
        if (middlewares) this.middlewares = middlewares;
        this.setHandler();
    }

    setHandler() {
        this.router.get('/', this.homeHandler);
        if (this.middlewares)
            this.router.post('/', this.middlewares, this.newCode);
        else this.router.post('/', this.newCode)
    }

    homeHandler(req: Request, res: Response) {
        let _path = path.join(__dirname, '../public/index.html');
        return res.sendFile(_path);
    }

    newCode(req: Request, res: Response) {
        return res.json({ message: 'Working!' });
    }
}