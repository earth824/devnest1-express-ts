import express, { type Router } from 'express';

export default abstract class Route {
  public router: Router = express.Router();
}
