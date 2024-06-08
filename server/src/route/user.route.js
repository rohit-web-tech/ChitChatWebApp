import { setUserController } from "../controllers/user.controller.js";
import { Router } from "express" ;
const router = Router();

router.route("/setUser").post(setUserController);

export default router ;