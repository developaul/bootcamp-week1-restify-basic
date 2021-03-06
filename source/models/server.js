import { createServer } from 'restify';
import { Router } from 'restify-router';

import {
  profileRouter,
  searchRouter
} from '../routes';

class Server {

  constructor() {
    this.server = createServer();
    this.port = process.env.PORT;
    this.router = new Router();

    this.paths = {
      profile: '/api/profiles',
      search: '/api/search'
    }

    this.routes();
  }

  routes() {
    this.router.add(this.paths.profile, profileRouter);
    this.router.add(this.paths.search, searchRouter);
    this.router.applyRoutes(this.server);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`%s listening at %s ${this.server.name} ${this.server.url}`);
    });
  }

}

export default Server;