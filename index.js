/*----------------------------------------------------------
 * Práctica 7: MVC APP
 * Fecha: 30-Oct-2019
 * Autores:
 *           A01373264 Carlos Carbajal
 *           A01373471 Marina Haro
 *----------------------------------------------------------*/
const express = require("express");
const marca = require("./routes/marcas");
const bodyParser = require("body-parser");
var app = express();

// EJS
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const db_url = "mongodb://localhost/dbMarcas";
mongoose.connect(db_url, { userNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Error en la conexión"));
app.use(express.json());
app.use("/practica7", marca);
app.listen("8080", () => {
  console.log("server up");
});
