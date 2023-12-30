import user_model from "../models/user_model.js";
import jwt from "jsonwebtoken";
import env from "dotenv";
const AuthMiddleware = {
    async verifyUser(req, res, next) {
        const { mail } = req.body;
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
            // console.log(pwdFound[0]);
            res.locals.user = { isAdmin: pwdFound[0].is_admin, userName: pwdFound[0].user_name };
            next();
        } catch (error) {
            console.log(error);
            return;
        }
    },
    async createToken(req, res) {
        try {
            const token = jwt.sign(
                {
                    exp: Math.floor(Date.now() / 1000) + 60 * 60,
                    data: res.locals.user,
                },
                process.env.SECRET
            );
            res.status(200).json({ token, userName: res.locals.user.userName });
            // console.log("token : ", token);
            // const decodedToken = jwt.verify(token, "secret");
            // console.log("token decoded : ", decodedToken);
        } catch (error) {
            throw new Error("could not create token", error);
        }
    },
    async verifyToken(req, res, next) {
        const token = req.headers.token;
        // console.log("token sent from frontend", token);
        try {
            if (!token) {
                res.status(404).json({ message: "there's no token to verify" });
                return;
            }
            const decodedToken = jwt.verify(token, process.env.SECRET);
            console.log(decodedToken);
            next();
        } catch (error) {
            console.error("Error verifying token:", error);
            res.status(401).json({ message: "Invalid token" });
        }
    },
};

export default AuthMiddleware;
