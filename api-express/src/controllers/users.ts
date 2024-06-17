import { findManyUsers, findUserById } from "../services/findManyUsers";
import { Request, Response } from "express";

export class UsersController {
  public get(req: Request, res: Response) {
    const users = findManyUsers();
    return res.status(200).send(users);
  }

  public getById(req: Request, res: Response) {
    const id = req.params.id;
    id.toString();

    findManyUsers();

    const user = findUserById(Number(id));
    return res.status(200).send(user);
  }
}
