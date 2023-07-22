// import d'Express
import express from "express";
// création de server Express
const app = express();
import cors from "cors";

// import du pkg, pour utiliser le __dirname
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import de la session Express
// import du router Express
import router from "./app/router.js";
// import du dotenv pour aller chercher les credentials de la db
import dotenv from "dotenv";
// config pour dotenv
dotenv.config();

// définition du port d'écoute
const PORT = process.env.PORT || 4000;

// définition du titre du server Express
app.locals.siteName = "XXX";

// urlencoded pour pouvoir envoyer des données du front via requête POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow cors for everyone
app.use(cors());

// Express utilise la session et ses options

// dfinition du chemin pour fichiers statiques
app.use(express.static(__dirname + "/public"));

// utilisation du router
app.use(router);

// Ecoute du port + console du port d'écoute.
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
