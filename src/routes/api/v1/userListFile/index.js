import { Router } from "express";
import { storeUserListFile } from "../../../../controllers/index.js";
import { uploadFile } from "../../../../services/multer/index.js";
import { authAdminMiddleware } from "../../../../middlewares/index.js";

const userListFileRoutes = Router();
userListFileRoutes.post("/", uploadFile.single("userListFile"), authAdminMiddleware, storeUserListFile);
export { userListFileRoutes };
