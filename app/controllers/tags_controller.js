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
			const { name } = req.body.data;
			let tagAdded = await tags_model.AddTag(name);
			if (tagAdded) {
				res.json(tagAdded);
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	},
	async AttachTagsToPost(req, res) {
		try {
			const { tagName } = req.body.data;
			let tagReadyToBeAttached = await tags_model.AddTag(tagName);
			if (!tagReadyToBeAttached) {
				// console.log(
				// 	`well done, tag ${tagName} has been addded ! Now, let's attach it to its post...`
				// );
				// // console.log(tagReadyToBeAttached);
				res.status(500).json(
					"something went wong....it's not you...it's me."
				);
			}

			const tagId = tagReadyToBeAttached.id;
			const postId = req.params.id;
			// console.log(tagId, postId);
			let AttachTag = await tags_model.attachTagToPost(tagId, postId);
			if (AttachTag) {
				res.status(200).json({
					success: "Tag has been attached",
					AttachTag,
				});
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	},
	async detachTagsToPost(req, res) {
		try {
			const { tagId, postId } = req.params;
			let tagToDetach = await tags_model.DetachTagFromPost(tagId, postId);
			if (tagToDetach) {
				res.status(200).json({
					success: "Tag has been detached",
				});
			} else {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	},
};

export default tags_controller;
