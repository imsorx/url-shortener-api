import { Router } from "express";

export default interface ControllerInterface {
    router: Router;
    setHandler(): void;
}