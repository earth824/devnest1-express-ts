import express, { type Express } from 'express';
import cors from 'cors';
import envConfig from './config/env.config';
import notFoundMiddleware from './middlewares/not-found.middleware';
import errorHandler from './middlewares/error.middleware';
import authRoute from './routes/auth.route';
import todoRoute from './routes/todo.route';

class App {
  private app: Express = express();

  constructor() {
    this.configureMiddleware();
    this.configureRoute();
    this.configureNotFound();
    this.configureGlobalError();
  }

  private configureMiddleware(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private configureRoute(): void {
    this.app.use('/auth', authRoute);
    this.app.use('/todos', todoRoute);
  }

  private configureNotFound(): void {
    this.app.use(notFoundMiddleware.handle);
  }

  private configureGlobalError(): void {
    this.app.use(errorHandler.handle);
  }

  public listen(port: number): void {
    this.app.listen(port, () => console.log(`server running on port ${port}`));
  }
}

const app = new App();
app.listen(envConfig.PORT);
