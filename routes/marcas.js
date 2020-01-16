/*----------------------------------------------------------
 * Práctica 7: MVC APP
 * Fecha: 30-Oct-2019
 * Autores:
 *           A01373264 Carlos Carbajal
 *           A01373471 Marina Haro
 *----------------------------------------------------------*/

const express = require("express");
const router = express.Router();

const mrcController = require("../controllers/marcas");
router.get("/", mrcController.index);
router.get("/altaMarca", mrcController.altaMarca);
router.post("/altaMarca", mrcController.crearMarca);
router.get("/bajaMarca", mrcController.bajaMarca);
router.post("/bajaMarca", mrcController.eliminarMarca);
router.get("/actualizarMarca", mrcController.modificarMarca);
router.post("/actualizarMarca", mrcController.actualizarMarca);
router.get("/accionExitosa", mrcController.accionExitosa);
router.get("/consultarMarcas", mrcController.consultarMarcas);
router.get("/consultarMarca", mrcController.consultarMarca);

module.exports = router;
