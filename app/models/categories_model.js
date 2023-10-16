import client from "../database.js";

const category_model = {
    async getAllCategories() {
        try {
            const sqlQuery = {
                text: `SELECT * FROM categories;`,
            };
            const response = await client.query(sqlQuery);
            return response.rows[0];
        } catch (error) {
            console.log(error);
        }
    },
};

export default category_model;
