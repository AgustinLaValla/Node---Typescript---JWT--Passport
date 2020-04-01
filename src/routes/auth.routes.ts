import { Router } from 'express';
import { signIn, signUp } from '../controllers/user.controller';

class AuthRoutes {

    public router: Router;

    constructor() { 
        this.router = Router();
        this.routes();
    }

    routes() { 
        this.router.post('/signup', signUp);
        this.router.post('/signin', signIn);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;