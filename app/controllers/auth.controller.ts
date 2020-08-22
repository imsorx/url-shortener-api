import jwt from 'jsonwebtoken';
import express, { Router, Response, Request } from 'express';
import ControllerInterface from './controller.interface';
import MiddlewareInterface from 'app/middlewares/middleware.interface';

export default class AuthController implements ControllerInterface {

    public router: Router = express.Router();
    middlewares: MiddlewareInterface[] | undefined;

    constructor(middleware?: MiddlewareInterface[]) {
        this.middlewares = middleware
        this.setHandler();
    }

    setHandler() {
        if (this.middlewares) this.router.post('/auth', this.middlewares, this.authHandler);
        else this.router.post('/auth', this.authHandler);
    }

    authHandler(req: Request, res: Response) {
        try {
            if (!req.body || !req.body.usr || !req.body.pwd) throw new Error('Credentials required!');
            else if (process.env.KEY) {
                let token = jwt.sign({ ip: req.ip }, process.env.KEY);
                return res.status(200).json({ token: token });
            }
        } catch (err) {
            return res.status(400).json({ error: { message: err.message } })
        }
    }
}