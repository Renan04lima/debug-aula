import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { UsersController } from "./controllers/users";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const usersController = new UsersController();

app.get("/", (req, res) => {
  const array = [1, 2, 3, 4, 5];

  array
    .map((num) => num * 2)
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);

  res.send("Hello");
});

app.get("/users", usersController.get);

app.get("/users/:id", usersController.getById);

app.listen(5000, () => {
  console.log("Listening to 5000");
});
