import express from "express";
import posts_controller from "./controllers/posts_controller.js";
import tags_controller from "./controllers/tags_controller.js";
import AuthMiddleware from "./middlewares/auth.js";
import delete_controller from "./controllers/delete_controller.js";
import categories_controller from "./controllers/categories_controller.js";

const app = express();
const router = express.Router();

//routes list here
router.get("/posts", posts_controller.AllPosts);
router.get("/categories", categories_controller.AllCategories);
router.get("/posts/:id(\\d+)", posts_controller.OnePost);
router.get("/posts/:id(\\d+)/tags", tags_controller.AlltagsFromOnePost);
router.get("/tags", tags_controller.Alltags);
router.get("/tags/:id(\\d+)/posts", posts_controller.AllPostsFromTheirTags);
router.post("/login", AuthMiddleware.verifyUser);
router.post("/tags", tags_controller.AddTags);
router.post("/posts/:id(\\d+)/tags", tags_controller.AttachTagsToPost);
router.post("/posts/:id(\\d+)/existingtags", tags_controller.AttachTagsToPostFromAnExistingTag);
router.post("/posts", posts_controller.AddPost);
router.delete("/posts/:id(\\d+)", delete_controller.deleteRecord);
router.delete("/tags/:id(\\d+)", delete_controller.deleteRecord);
router.delete("/posts/:postId(\\d+)/tags/:tagId(\\d+)", tags_controller.detachTagsToPost);
router.patch("/posts/:id(\\d+)", posts_controller.EditPost);

export default router;
