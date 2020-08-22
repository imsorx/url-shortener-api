import App from './app';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import loggerMiddleware from './middlewares/logger.middleware';
import HomeController from './controllers/home.controller';
import AuthController from './controllers/auth.controller';
import VerifyMiddleware from './middlewares/verify.middleware';

dotenv.config();


const app = new App({
    port: parseInt(process.env.PORT || "5000"),
    InitMiddlewares: [
        // helmet(),
        cors(),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ],
    controllers: [
        new HomeController([VerifyMiddleware]),
        new AuthController()
    ],
});

app.listen();