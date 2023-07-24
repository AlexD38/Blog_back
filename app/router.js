import express from "express";
import posts_controller from "./controllers/posts_controller.js";
import tags_controller from "./controllers/tags_controller.js";
import AuthMiddleware from "./middlewares/auth.js";

const app = express();
const router = express.Router();

//routes list here
router.get("/posts", posts_controller.AllPosts);
router.get("/posts/:id(\\d+)", posts_controller.OnePost);
router.get("/tags", tags_controller.Alltags);
router.post("/login", AuthMiddleware.verifyUser);

export default router;
