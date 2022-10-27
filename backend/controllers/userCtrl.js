// J'importe mon fichier modèle utilisateur
const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe Bcrypt
const bcrypt = require("bcrypt");
// J'importe JWT
const jwt = require("jsonwebtoken");

// Partie enregistrement de l'utilisateur
exports.signup = (req, res, next) => {
  // J'appel la fonction de hashage de bcrypt
  bcrypt
    .hash(req.body.password, 10) // Je sale le mot de passe 10 fois
    .then((hash) => {
      User.create({
        // Je crée mon utilisateur
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash,
        isAdmin: 0,
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch(() =>
          res
            .status(401)
            .json({ message: "Erreur lors de la création de compte !" })
        );
    })
    .catch((error) => {
      res.status(400).json({ error, message: "Erreur !" });
    });
};

// Partie connexion de l'utilisateur
exports.login = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } }); // Je cherche l'email de la requête avec celui enregistré
  console.log(req.body.email);
  if (!user) {
    return res.status(401).json({ error: "Utilisateur non trouvé" });
  } else {
    console.log("utilisateur trouvé !");
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ error: "Mot de passe et/ou email incorrect !" });
        }
        res.status(200).json({
          userId: user.id,
          pseudo: user.pseudo,
          email: user.email,
          isAdmin: user.isAdmin,
          token: jwt.sign(
            { userId: user.id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            {
              expiresIn: "8h",
            }
          ),
        });
      })
      .catch((error) => res.status(500).json({ error }));
  }
  console.log("Utilisateur connecté !");
};

// Partie sur l'affichage de tout les utilisateurs
exports.getAllUser = async (req, res, next) => {
  console.log(" ------- Je veux voir tous les utilisateurs ! -------- ");
  const user = await User.findAll();
  if (user) {
    res.status(200).json({ user });
    console.log(" ------- j'affiche tous les utilisateurs ! ------- ");
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé !" });
  }
};

// Affichage d'un profil d'utilisateur
exports.getOneUser = async (req, res, next) => {
  console.log("------ Je cherche un utilisateur ! --------");
  const user = await User.findOne({ where: { id: req.params.id } }); // Je cherche l'email de la requête avec celui enregistré
  console.log("userId", user);
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé !" });
  }
};

// Modification d'un profil d'utilisateur
// exports.modifyUser = async (req, res, next) => {
//     console.log("fonction modifyUser déclenchée");
//     // Je récupère l'utilisateur
//     User.findOne( {_id: req.params.id} )
//         .then((user) => {
//             console.log(user);
//             res.status(200).json({ message: "Utilisateur trouvé !"})
//         })
//     User.update({_id: req.params.id})
//     console.log();
// };

// Suppression d'un profil d'utilisateur
exports.deleteUser = async (req, res, next) => {
  console.log(" ---- je veux supprimé un compte --------");
  const user = await User.findOne({
    where: { id: req.params.id },
  });
  console.log(user);
  // const admin = await User.findOne({ where: { isAdmin: req.body.isAdmin } });
  if (!user) {
    res.status(401).json({ message: "Utilisateur non trouvé !" });
  } else {
    User.destroy({ where: { id: req.params.id } });
    console.log(" ---- Utilisateur supprimé ! -------");
    return res.status(200).json({ mesage: "Utilisateur supprimé !" });
  }
};
