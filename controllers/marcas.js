/*----------------------------------------------------------
 * Práctica 7: MVC APP
 * Fecha: 30-Oct-2019
 * Autores:
 *           A01373264 Carlos Carbajal
 *           A01373471 Marina Haro
 *----------------------------------------------------------*/
const marca = require("../models/marcas");

exports.crearMarca = (req, res) => {
  var mrc = new marca({
    nombre: req.body.nombre,
    establecimiento: req.body.establecimiento,
    origen: req.body.origen,
    url: req.body.url
  });
  mrc.save(err => {
    if (err) res.render("error.html");
    res.redirect("/practica7/accionExitosa");
  });
};

exports.index = (req, res) => {
  res.render("index.html");
};

exports.altaMarca = (req, res) => {
  res.render("alta.html");
};

exports.bajaMarca = (req, res) => {
  res.render("baja.html");
};

exports.modificarMarca = (req, res) => {
  res.render("modificar.html");
};

exports.accionExitosa = (req, res) => {
  res.render("success.html");
};

exports.consultarMarcas = (req, res) => {
  marca.find((err, mrc) => {
    if (err) res.render("error.html");
    res.render("consulta.html", { marcas: mrc });
  });
};

exports.consultarMarca = (req, res) => {
  marca.findOne(
    { nombre: req.query.marca },
    "nombre establecimiento origen url",
    function(err, mrc) {
      if (err) res.render("error.html");
      // Prints "Space Ghost is a talk show host".
      if (mrc != null) {
        res.render("consulta1.html", { marca: mrc });
      }
      res.render("error.html");
    }
  );
};

exports.eliminarMarca = (req, res) => {
  marca.findOne({ nombre: req.body.nombre }, "_id", function(err, mrc) {
    if (err) res.render("error.html");
    //console.log(mrc);
    marca.findByIdAndRemove(mrc, err => {
      if (err) throw err;
      res.redirect("/practica7/accionExitosa");
    });
  });
};

exports.actualizarMarca = (req, res) => {
  marca.findOne({ nombre: req.body.nombre }, "_id", function(err, mrc) {
    if (err) res.render("error.html");
    //console.log(mrc);
    marca.findByIdAndUpdate(
      mrc,
      {
        establecimiento: req.body.establecimiento,
        origen: req.body.origen,
        url: req.body.url
      },
      err => {
        if (err) res.render("error.html");
        res.redirect("/practica7/accionExitosa");
      }
    );
  });
};
