const express = require("express");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 3000;

module.exports = app;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "clave123",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", function (req, res) {
  const conocido = Boolean(req.session.nombre);
  res.send(`
    <h1>Sesiones en Express.js</h1>
    <p>Conocido: ${conocido}</p>
    <p>Nombre: ${req.session.nombre}</p>
  `);
});

app.post("/ingresar", function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre;
  }
  res.redirect("/");
});

app.get("/salir", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

app.get("/escribir-variable/:valor", function (req, res) {
  const valor = req.params.valor;
  req.session.miVariable = valor;
  res.send("Variable de sesión escrita: " + valor);
});

app.get("/mostrar-variable", function (req, res) {
  const valor = req.session.miVariable;
  res.send("Variable de sesión actual: " + valor);
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});
