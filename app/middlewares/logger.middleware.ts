import MiddlewareInterface from './middleware.interface'

const loggerMiddleware: MiddlewareInterface = function loggerMiddleware(req, res, next): void {
    console.log(req.method, req.path, req.ip);
    return next();
}

export default loggerMiddleware;