import { Router } from "express";
import {
  storeChallenge,
  showChallenge,
  indexChallenge,
} from "../../../../controllers/index.js";
import { authMiddleware } from "../../../../middlewares/index.js";
import { challengeAnswerRoutes } from "./challengeAnswer/index.js";

const challengeRoutes = Router();

challengeRoutes.get("/", authMiddleware, indexChallenge);
challengeRoutes.post("/", authMiddleware, storeChallenge);
challengeRoutes.get("/:challengeId", authMiddleware, showChallenge);

challengeRoutes.use("/:challengeId/challengeanswers", challengeAnswerRoutes);

export { challengeRoutes };
