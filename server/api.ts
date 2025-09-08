import { type Request, type Response, Router } from "express";
import { whales, fish, setupData } from "./data.ts";
import type { Fish, Whale, User } from "lib/apiTypes.ts";

const createApiRouter = () => {
  const api = Router();
  setupData();

  api.get("/whales/", (req, res) => getAnimals(whales, req, res));
  api.get("/fish/", (req, res) => getAnimals(fish, req, res));
  api.get("/whales/bad", getBadWhales);
  api.get("/whales/invalid", getInvalidWhales);
  api.get("/whales/events", getWhalesEvents);
  api.get("/users", (req, res) => getUsers(req, res));
  api.post("/users", (req, res) => postUsers(req, res));

  return api;
};

export default createApiRouter;

const getAnimals = (animals: Whale[] | Fish[], req: Request, res: Response) => {
  const term =
    typeof req.query.term === "string" ? req.query.term.toLowerCase() : null;

  const filtered = term == null
    ? animals
    : animals.filter(
        (animal) =>
          animal.name.toLowerCase().includes(term) ||
          animal.species.toLowerCase().includes(term)
      );

  res.json({ animals: filtered.slice(0, 15) });
};

const getBadWhales = (_req: Request, res: Response) => {
  const animals = [
    { ...whales[0], location: undefined },
    ...whales.slice(1, 5),
    { ...whales[5], location: undefined },
    ...whales.slice(6, 9),
    { ...whales[9], location: undefined },
    { ...whales[10], location: undefined },
    ...whales.slice(11, 15),
  ];
  res.json({ animals });
};

const getInvalidWhales = (_req: Request, res: Response) => {
  res.send("[{");
};

const getWhalesEvents = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const firstFewWhales = whales.slice(0, 15);

  const movementIntervalId = setInterval(() => {
    firstFewWhales.forEach((whale) => {
      const movement = Math.random();
      if (movement < 0.2) {
        whale.location.x += 1;
      } else if (movement < 0.4) {
        whale.location.x -= 1;
      } else if (movement < 0.6) {
        whale.location.y += 1;
      } else if (movement < 0.8) {
        whale.location.y -= 1;
      }
    });
  }, 300);

  const messageIntervalId = setInterval(() => {
    res.write(`data: ${JSON.stringify(firstFewWhales)}\n\n`);
  }, 300);

  req.on("close", () => {
    clearInterval(movementIntervalId);
    clearInterval(messageIntervalId);
    res.end();
  });
};

const users: User[] = [
  { username: "ada", species: "Skiller Whale" },
];

const getUsers = (_req: Request, res: Response) => {
  res.json({ data: users });
};

const postUsers = async (req: Request, res: Response) => {
  await delay(1000);
  const { username, species } = req.body;
  if (
    typeof username !== "string" || username.length === 0 ||
    typeof species !== "string" || species.length === 0
  ) {
    res.status(400).json({ error: "Invalid user data" });
    return;
  }

  if (users.find((u) => u.username === username)) {
    res.status(409).json({ error: "Username already exists" });
    return;
  }

  const newUser = { username, species };
  users.push(newUser);
  res.status(201).json({ data: newUser });
};

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
