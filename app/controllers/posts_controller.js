import posts_model from "../models/posts_model.js";

const posts_controller = {
	async AllPosts(req, res) {
		try {
			let posts = await posts_model.getAllPosts();
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
};

export default posts_controller;
