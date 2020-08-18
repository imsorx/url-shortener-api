import express, { Router, Response, Request } from 'express';
import * as path from 'path';
import ControllerInterface from './controller.interface';
import AuthController from './auth.controller';

export default class HomeController implements ControllerInterface {

    public router: Router = express.Router();

    constructor() {
        this.setHandler();
    }

    setHandler() {
        this.router.get('/', this.homeHandler);
        this.router.post('/', this.newCode);
    }

    homeHandler(req: Request, res: Response) {
        let _path = path.join(__dirname, '../public/index.html');
        return res.sendFile(_path);
    }
    newCode(req: Request, res: Response) {
        // if () return res.json({ ...req.body });
        return res.json({ message: 'Login first!' });
    }
}