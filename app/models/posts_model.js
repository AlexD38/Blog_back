import client from "../database.js";

const posts_model = {
	async getAllPosts() {
		try {
			const sqlQuery = {
				text: `SELECT * FROM posts;`,
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
	async getOnePost(postId) {
		try {
			const sqlQuery = {
				text: `SELECT * FROM posts WHERE id=$1;`,
				values: [postId],
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
};

export default posts_model;
