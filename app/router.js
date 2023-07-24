import express from "express";
import posts_controller from "./controllers/controller.js";

const app = express();
const router = express.Router();

//routes list here
router.get("/", posts_controller.AllPosts);

export default router;
