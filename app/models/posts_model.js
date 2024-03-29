import client from "../database.js";

const posts_model = {
    async getAllPosts() {
        try {
            const sqlQuery = {
                text: `SELECT * FROM posts`,
            };
            const response = await client.query(sqlQuery);
            return response.rows;
        } catch (error) {
            console.log(error);
        }
    },
    async getAllPostsFromTheirCategory(catId) {
        try {
            const sqlQuery = {
                text: `SELECT DISTINCT posts.id, posts.title, posts.slug, posts.body, categories.name as category FROM posts JOIN categories ON category_id = categories.id WHERE category_id = $1`,
                values: [catId],
            };
            const response = await client.query(sqlQuery);
            return response.rows;
        } catch (error) {
            console.log(error);
        }
    },
    async getAllPostsFromTheirTags(tagId) {
        try {
            const sqlQuery = {
                text: `SELECT posts_id, tags_id, title, slug, body FROM posts_has_tags join posts ON posts_id = posts.id where tags_id = $1`,
                values: [tagId],
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
    async addPost(title, slug, body, categoryId) {
        try {
            const sqlQuery = {
                text: `INSERT INTO posts (title, slug, body, category_id) VALUES($1, $2, $3, $4)`,
                values: [title, slug, body, categoryId],
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
                text: `UPDATE posts SET title = $1, slug = $2, body = $3, updated_at = NOW() WHERE id=$4;`,
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
