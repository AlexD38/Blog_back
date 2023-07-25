import client from "../database.js";

const posts_model = {
	async getAllPosts() {
		try {
			const sqlQuery = {
				text: `SELECT
				* FROM posts`,
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
	async addPost(title, slug, body) {
		try {
			const sqlQuery = {
				text: `INSERT INTO posts (title, slug, body) VALUES($1, $2, $3)`,
				values: [title, slug, body],
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},

	async editPost(title, slug, body, id) {
		try {
			const sqlQuery = {
				text: `UPDATE posts SET title = $1, slug = $2, body = $3 WHERE id=$4;`,
				values: [title, slug, body, id],
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
};

export default posts_model;
