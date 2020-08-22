import { Router } from "express";
import MiddlewareInterface from 'app/middlewares/middleware.interface';

export default interface ControllerInterface {
    router: Router;
    middlewares: MiddlewareInterface[] | undefined;

    setHandler(): void;
}