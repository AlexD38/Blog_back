import client from "../database.js";

const category_model = {
    async getAllCategories() {
        try {
            const sqlQuery = {
                text: `SELECT COUNT(posts.id) as posts_count, categories.name as category_name, categories.id AS id FROM posts JOIN categories ON category_id = categories.id group BY categories.name, categories.id`,
            };
            const response = await client.query(sqlQuery);
            return response.rows;
        } catch (error) {
            console.log(error);
        }
    },
};

export default category_model;
