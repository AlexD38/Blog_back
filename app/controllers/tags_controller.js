import tags_model from "../models/tags_model.js";

const tags_controller = {
	async Alltags(req, res) {
		try {
			let tags = await tags_model.getAlltags();
			if (tags) {
				res.json(tags);
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	},
	async AlltagsFromOnePost(req, res) {
		try {
			const postId = req.params.id;
			let tags = await tags_model.getAlltagsFromOnePost(postId);
			if (tags) {
				res.json(tags);
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	},
	async AddTags(req, res) {
		try {
			const { name } = req.body;
			let tagAdded = await tags_model.addTags(name);
			if (tagAdded) {
				res.json(tagAdded);
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	},
};

export default tags_controller;
