import delete_model from "../models/delete_model.js";

const delete_controller = {
	async deleteRecord(req, res) {
		const url = req.url;
		const tableName = url.split("/")[1];
		const recordId = req.params.id;

		try {
			const results = await delete_model.deleteRecord(
				tableName,
				recordId
			);
			res.json(results);
		} catch (error) {
			console.log(error);
		}
	},
};

export default delete_controller;
