import express, { Router, Response, Request } from 'express';
import ControllerInterface from './controller.interface';

export default class AuthController implements ControllerInterface {

    public router: Router = express.Router();
    public isLogged: boolean = false;

    constructor() {
        this.setHandler();
    }

    setHandler() {
        this.router.post('/auth', this.authHandler);
    }

    authHandler(req: Request, res: Response) {
        return res.json({ ...req.body });
    }
}