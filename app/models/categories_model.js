import client from "../database.js";

const category_model = {
    async getAllCategories() {
        try {
            const sqlQuery = {
                text: `SELECT
  categories.id AS category_id,
  categories.name AS category_name,
  jsonb_agg(jsonb_build_object(
    'title', posts.title,
    'slug', posts.slug,
    'body', posts.body
  )) AS posts_data
FROM
  categories
LEFT JOIN
  posts ON categories.id = posts.category_id
GROUP BY
  categories.id, categories.name;
`,
            };
            const response = await client.query(sqlQuery);
            return response.rows;
        } catch (error) {
            console.log(error);
        }
    },
};

export default category_model;
