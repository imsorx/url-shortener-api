import express, { Application } from 'express';
import ControllerInterface from './controllers/controller.interface';


export default class App {

    public app: Application;
    public port: number;

    constructor(init: { port: number, InitMiddlewares: any, controllers: ControllerInterface[] }) {
        this.app = express();
        this.port = init.port;

        this.middlewares(init.InitMiddlewares);
        this.routes(init.controllers);
        this.assets();
    }


    private middlewares(middleWares: any[]) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: ControllerInterface[]) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    private assets() {
        this.app.use(express.static(__dirname + '/public'));
    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }

}
