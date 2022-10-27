const jwt = require("jsonwebtoken");
// J'importe dotenv
require("dotenv").config();
// J'importe modèle de post
const Post = require("../models/Post");

exports.token = (req, res, next) => {
  try {
    // Je créer une constante à partir de la requête
    console.log(" -------- Je vérifie l'utilisateur ! --------");
    const token = req.headers.authorization.split(" ")[1]; // Je le split car il y a un espace
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Je décode le token
    const userId = decodedToken.userId; // Je stock l'id d'écoder
    console.log(userId);
    if (req.body.userId && req.body.userId !== userId) {
      // alors je renvoi une erreur
      console.log(" -------- Utilisateur trouvé !! --------");
      throw "User ID non valable !";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};

exports.adminUser = (req, res, next) => {
  try {
    // Je créer une constante à partir de la requête
    console.log(" -------- Je vérifie que ce soit un admin ! --------");
    const token = req.headers.authorization.split(" ")[1]; // Je le split car il y a un espace
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // Je décode le token
    const userId = decodedToken.userId; // Je stock l'id d'écoder
    const admin = decodedToken.isAdmin; // Je stock la valeur de isAdmin
    console.log(admin);
    if (admin == 1) {
      // alors je renvoi une erreur
      console.log("C'est un admin !");
      return next();
    }
    if (req.params.id == userId) {
      // alors je renvoi une erreur
      console.log("C'est lui même !");
      return next();
    } else {
      throw "ce n'est pas un admin !";
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};


