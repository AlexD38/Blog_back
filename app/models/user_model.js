import client from "../database.js";

const user_model = {
	async getUserMail(mail) {
		try {
			const sqlQuery = {
				text: `SELECT * FROM users WHERE mail=$1;`,
				values: [mail],
			};
			const response = await client.query(sqlQuery);
			return response.rows[0];
		} catch (error) {
			console.log(error);
		}
	},
	async getUserPwd(pwd) {
		try {
			const sqlQuery = {
				text: `SELECT * FROM users WHERE password=$1;`,
				values: [pwd],
			};
			const response = await client.query(sqlQuery);
			return response.rows;
		} catch (error) {
			console.log(error);
		}
	},
};

export default user_model;
