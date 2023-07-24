import posts_model from "../models/model.js";

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
};

export default posts_controller;
