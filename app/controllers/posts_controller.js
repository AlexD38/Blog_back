import posts_model from "../models/posts_model.js";

const posts_controller = {
    async AllPosts(req, res) {
        try {
            let posts = await posts_model.getAllPosts();
            if (posts) {
                // console.log(posts);
                res.json(posts);
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async AllPostsFromTheirCats(req, res) {
        try {
            const catId = req.params.id;
            // console.log(catId);
            let posts = await posts_model.getAllPostsFromTheirCategory(catId);
            if (posts) {
                res.json(posts);
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async AllPostsFromTheirTags(req, res) {
        try {
            const tagId = req.params.tagId;
            let posts = await posts_model.getAllPostsFromTheirTags(tagId);
            if (posts) {
                res.json(posts);
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async OnePost(req, res) {
        try {
            const postId = req.params.id;
            let post = await posts_model.getOnePost(+postId);
            if (post) {
                res.json(post);
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async AddPost(req, res) {
        try {
            const { title, slug, body, categoryId } = req.body;
            console.log(title, slug, body, categoryId);
            let newPost = await posts_model.addPost(title, slug, body, categoryId);
            if (newPost) {
                res.status(200).json({ success: "Post has been added" });
            } else {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async EditPost(req, res) {
        try {
            const { title, slug, body } = req.body;
            const id = req.params.id;

            console.log(title, slug, body);
            let correctedPost = await posts_model.editPost(title, slug, body, id);
            if (correctedPost) {
                res.status(200).json({ success: "Post has been updated" });
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default posts_controller;
