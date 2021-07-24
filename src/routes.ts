import {Router} from "express";
import {GreetingsController} from "./controllers/GreetingsController";

const router = Router();

const createTagController = new GreetingsController();

router.get("/example", createTagController.handle);

export {router};
