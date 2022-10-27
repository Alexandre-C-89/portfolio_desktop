// J'importe multer
const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  // j'indique à multer ou enregistré le fichier entrant
  destination: (req, file, callback) => {
    console.log(file);
    // première argument est égal à null
    // Ensuite je passe le nom du dossier qui reçoit les images
    callback(null, "./images");
  },
  // j'indique le nom de fichier à utilisé a multer
  // car on ne peut pas utilisé le nom d'origine
  // les espaces par des underscores
  filename: (req, file, callback) => {
    // Ici, je génère le nouveau nom de fichier,
    // la partie avant l'extension
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    console.log(name + Date.now() + "." + extension);
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("media");
