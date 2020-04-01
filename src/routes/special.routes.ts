//Protected routes by auhtentication
import { Router,  Request, Response} from 'express';
import passport from 'passport';

class SpecialRoutes {

  public router: Router;

  constructor() { 
    this.router = Router();
    this.routes();
  }

  getSpecialRoute(req: Request, res: Response) { 
      res.send('Success');
  }

  routes() { 
    this.router.get('/special', passport.authenticate('jwt', {session:false}),this.getSpecialRoute);

  }
}

const specialRoutes = new SpecialRoutes();
export default specialRoutes.router;