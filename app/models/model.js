import client from "../database.js";

const posts_model = {
	async getAllPosts() {
		try {
			const sqlQuery = {
				text: `SELECT * FROM posts;`,
			};
			const response = await client.query(sqlQuery);
			return response.rows[0];
		} catch (error) {
			console.log(error);
		}
	},
};

export default posts_model;
