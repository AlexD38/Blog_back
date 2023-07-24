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
};

export default tags_controller;
