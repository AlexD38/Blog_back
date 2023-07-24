import user_model from "../models/user_model.js";

const AuthMiddleware = {
	async verifyUser(req, res, next) {
		// extraction de l'email et pwd depuis le body de la requete
		const { mail, pwd } = req.body;
		console.log(mail, pwd);
		try {
			const mailFound = await user_model.getUserMail(mail);
			if (!mailFound) {
				res.status(405).json({ error: "...Mauvais identifiant" });
				return;
			}
			const pwdFound = await user_model.getUserPwd(mailFound.password);
			if (!pwdFound) {
				res.status(405).json({ error: "...Mauvais identifiant" });
				return;
			}
			res.status(200).json({ isAdmin: pwdFound[0].is_admin });
		} catch (error) {
			console.log(error);
			return;
		}
	},
};

export default AuthMiddleware;
