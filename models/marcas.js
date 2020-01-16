/*----------------------------------------------------------
 * Práctica 7: MVC APP 
 * Fecha: 30-Oct-2019
 * Autores:
 *           A01373264 Carlos Carbajal 
 *           A01373471 Marina Haro
 *----------------------------------------------------------*/
 
 const mng = require("mongoose")
 const Schema = mng.Schema
 
 var MarcaSchema = new Schema({
     nombre: {type:String, required:true, max:50},
     establecimiento: {type:Number, required:true},
     origen: {type:String, required:true},
     url: {type:String}
 })
 
 module.exports = mng.model("Marca", MarcaSchema)