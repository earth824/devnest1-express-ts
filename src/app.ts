import express, { type Express } from 'express';
import envConfig from './config/env.config';
import notFoundMiddleware from './middlewares/not-found.middleware';

// config third party middleware eg. cors express.json ratelimit, helmet etc.
// config route middleware
// config not found resource
// config error middlewear
// listen for port

class App {
  private app: Express = express();

  configureNotFound() {
    this.app.use(notFoundMiddleware.handle);
  }

  listen(port: number) {
    this.app.listen(port, () => console.log(`server running on port ${port}`));
  }
}

const app = new App();
app.listen(envConfig.PORT);
