import MiddlewareInterface from "./middleware.interface";
import jwt from 'jsonwebtoken';


const VerifyMiddleware: MiddlewareInterface = function (req, res, next) {
    try {
        let token = req.headers.authorization?.split(' ')[1];
        if (token && process.env.KEY) {
            jwt.verify(token, process.env.KEY);
            return next();
        } else throw new Error('Login first');
    } catch (err) {
        return res.status(404).json({ error: { message: err.message } })
    }
}

export default VerifyMiddleware;