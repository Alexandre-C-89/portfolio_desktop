const express = require("express");
const router = express.Router();

router.get("./", (req, res) => {
    res.send("Voici tout les posts !");
});

router.get("/:postId", (req, res) => {
    // Ici req.params.userId correspond à l'id 
    // de l'utilisateur sur lequel j'ai cliqué !
    res.send(`Voici le ${req.params.postId} que vous avez selectionner !`);
});

module.exports = router;