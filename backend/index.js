const express = require("express");
const app = express();

const users = require("./routes/usersRoutes.js");
const posts = require("./routes/postsRoutes.js");


app.use("/:userId", users);
app.use("/posts", posts);

// Ici, ce sont les headers (requêtes)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permet d'accéder à l'API depuis n'importe quelle origine
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); // chaque requête qui peuvent être effectué
  next();
});

app.get("/", (req, res) => {
    res.send("Voici la page d'accueil !");
});

app.all("/", (req, res) => {
    res.send("Voici la page d'accueil");
});


app.listen(8080);