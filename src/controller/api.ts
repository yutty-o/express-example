import { Request, Response } from "express";

/**
 * GET /api
 * Home page
 */
export let index = (req: Request, res: Response) => {
  const user = {
      "name": "yuki-ogawa",
      "age": 26
  };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(user);
};
