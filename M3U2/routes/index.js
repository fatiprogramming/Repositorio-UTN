var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", async (req, res, next) => {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  var obj = {
    to: "imail@mail.com",
    subject: "Formulario de contacto",
    html: `${nombre} desea contactarse mediante este correo: ${email}`,
  };
  var info = await transporter.sendMail(obj);
  res.render("index", {
    message: "Solicitud de contacto enviada",
  });
});

module.exports = router;
