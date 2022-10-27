// J'importe mon fichier modèle de post
const Post = require("../models/post");
// J'importe mon fichier modèle utilisateur
const User = require("../models/user");
// J'importe dotenv
require("dotenv").config();
// J'importe multer
const multer = require("multer");

// je gère la relation entre les utilisateurs et leurs posts

// Partie création de posts
exports.createPost = (req, res, next) => {
  console.log("Vous avez l'intention de créer un post !");
  // Je créer le post avec la méthode "create"
  if (req.file) {
    Post.create({
      // Je renseigne les champs
      title: req.body.title,
      description: req.body.description,
      media: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
      pseudo: req.body.pseudo,
      userId: req.body.userId,
    })
      .then(() => {
        return res.status(201).json({
          message: "Post créé avec l'image !",
        });
      })
      .catch(() => {
        return res.status(401).json({
          message: "Impossible de créer le post car il y a une erreur ! 1",
        });
      });
  } else {
    Post.create({
      // Je renseigne les champs
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      media: req.body.media,
      pseudo: req.body.pseudo,
    })
      .then(() => {
        // Si la requête est correcte j'ai un status 200
        return res.status(200).json({
          message: "Post créé ! ",
        });
      })
      .catch((error) => {
        console.log(error);
        // Si j'ai une erreur j'ai un status 401
        return res.status(401).json({
          message: "Impossible de créer le post car il y a une erreur ! 2",
        });
      });
  }
};

// exports.modifyPost = (req, res, next) => {
//     console.log("Vous avez l'intention de modifié un post !");
//     // console.log(req.token.userId);
//     const postId = req.params.postId;
//     const reqUserId = req.body.userId;
//     const dbPost = Post.findOne({where: { id:postId }})
//     console.log(postId, reqUserId, dbPost);
//     if (dbPost) { // Vérifie si le post que je modifie existe
//         console.log("condition vérifié !");
//         const userId = Post.findOne({ where: { id:{postId}, userId:{reqUserId} }})
//         console.log(userId);
//         if (userId) { // si l'utilisateur est l'auteur du post
//             console.log("utilisateur vérifié !");
//             Post.update({ where: {id:postId},
//                 title: req.body.title,
//                 description: req.body.description,
//                 media: req.body.media,
//             })
//             .then(() => res.status(200).json({ message: "post modifié !" }))
//             .catch((error) => res.status(400).json({ error }));
//         }
//     } else {
//         res.status(401).json({ message: "Post non trouvé !"})
//     }
// };

// Partie sur l'affichage de tout les posts
exports.getAllPost = async (req, res, next) => {
  const post = await Post.findAll();
  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(404).json({ message: "Posts non trouvé !" });
  }
};

// Affichage d'un post
exports.getOnePost = async (req, res, next) => {
  const post = await Post.findOne({ where: { postId: req.params.id } }); // Je cherche l'email de la requête avec celui enregistré
  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(404).json({ message: "post non trouvé !" });
  }
};

// Suppression d'un post de l'utilisateur
exports.deletePost = async (req, res, next) => {
  const post = await Post.findOne({ where: { postId: req.params.id } }); // Je cherche l'email de la requête avec celui enregistré
  if (post) {
    Post.destroy({ where: { postId: req.params.id } });
    res.status(200).json({ post });
  } else {
    res.status(404).json({ message: "post non trouvé !" });
  }
};
