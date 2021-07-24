import {Request, Response} from "express";
import {GreetingsService} from "../services/GreetingsService";

class GreetingsController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    const exampleService = new GreetingsService();

    const greetings = await exampleService.execute(name);

    return response.json(greetings);
  }
}

export { GreetingsController };
