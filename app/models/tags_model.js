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
	async getAlltagsFromOnePost(postId) {
		try {
			const sqlQuery = {
				text: `SELECT name
				FROM tags
					JOIN posts_has_tags ON tags.id = posts_has_tags.tags_id
					JOIN posts ON posts.id = posts_has_tags.posts_id
				WHERE posts.id = $1;`,
				values: [postId],
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
	async AddTag(name) {
		try {
			const sqlQuery = {
				text: `INSERT INTO tags (name) VALUES ($1) RETURNING *;`,
				values: [name],
			};
			const response = await client.query(sqlQuery);
			return response.rows[0];
		} catch (error) {
			console.log(error);
		}
	},
	async attachTagToPost(tagId, postId) {
		try {
			const sqlQuery = {
				text: `INSERT INTO posts_has_tags (posts_id, tags_id) VALUES ($1, $2);`,
				values: [postId, tagId],
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
};

export default tags_model;
