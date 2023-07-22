import client from "../database.js";

const get_model = {
    // async getOneUser(userId) {
    //     try {
    //         const sqlQuery = {
    //             text: `SELECT * FROM users WHERE id=$1;`,
    //             values: [userId],
    //         };
    //         const response = await client.query(sqlQuery);
    //         return response.rows[0];
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
};

export default get_model;
