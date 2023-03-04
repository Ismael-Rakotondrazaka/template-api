import { Router } from "express";
import { storeVote } from "../../../../../../controllers/index.js";
import { authMiddleware } from "../../../../../../middlewares/index.js";

const voteRoutes = Router({
  mergeParams: true,
});

voteRoutes.post("/", authMiddleware, storeVote);

export { voteRoutes };
