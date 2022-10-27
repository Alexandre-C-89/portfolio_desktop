const express = require("express");
const router = express.Router();

router.get("./", (req, res) => {
    res.send("Voici tout les utilisateurs !");
});

router.get("/:userId", (req, res) => {
    // Ici req.params.userId correspond à l'id 
    // de l'utilisateur sur lequel j'ai cliqué !
    res.send(`Voici ${req.params.userId} que vous avez selectionner !`);
});

module.exports = router;