import client from "../database.js";

const tags_model = {
	async getAlltags() {
		try {
			const sqlQuery = {
				text: `SELECT * FROM tags;`,
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
};

export default tags_model;
