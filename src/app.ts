import express, { Application } from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import passport from 'passport'
import passportMiddleware  from './middlewares/passport';
import specialRoutes from './routes/special.routes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(passport.initialize());
        passport.use(passportMiddleware);
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(authRoutes);
        this.app.use(specialRoutes);
    }

    async start() {
        this.app.listen(this.app.get('port'));
        console.log(`${colors.magenta('Server on port:')} ${colors.green(this.app.get('port'))}`)
    }
}

export default Server