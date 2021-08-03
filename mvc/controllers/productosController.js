const Producto = require('../models/productos');
const Mensaje = require('../models/mensajes');
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const loggerError = require('pino')('./logs/error.log')

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.agregar = async (req, res, next) => {

 try{
  producto = await Producto.find({}).lean()
    res.json(producto)
}
catch (e) { loggerError.error(e) } 
}

 exports.getProductos = async (req, res, next) => {
  try{
     producto = await Producto.find({}).lean()
     await res.json({productos: producto,id_usuario:req.user._id,activo:req.isAuthenticated()})  
  }
  catch (e) { loggerError.error(e) } 
  }


 exports.getProducto = async (req, res, next) => {
    let id = req.params.id;
    
    try{
       producto = await Producto.find({_id: id}).lean()
       mensaje = await Mensaje.find({articulo: id}).lean()
      console.log(producto)
      await res.json({producto: producto,mensaje:mensaje,id_usuario:req.user._id}) 
    }
    catch (e) { loggerError.error(e) } 
    }

exports.createProductos = async (req, res, next) => {  
    try{

      producto = new Producto(req.body)
      await producto.save()
      await res.status(200).send("Producto agregado a la bases de datos") 
    }
  catch (e) { console.log(e) }
}
exports.updateProducto = async (req, res, next) => { 
  
  let id = req.params.id;
  const {nombre,descripcion,precio,url,stock}=req.body
  let nuevoproducto={}
  if(nombre) nuevoproducto.nombre=nombre
  if(descripcion) nuevoproducto.descripcion=descripcion
  if(precio) nuevoproducto.precio=precio
  if(stock) nuevoproducto.stock= stock
  if(url) nuevoproducto.url=url
  nuevoproducto.actualizar=makeid(20)

  try{
    let producto = await Producto.findOneAndUpdate(
    {_id: id},
    {$set:nuevoproducto},
    {new:true}
    )
  await res.status(200).send("Producto actualizado en la base de datos")  
  }
  catch (e) { loggerError.error(e) }

  },

  exports.deleteProductos = async (req, res, next) => {
    let id = req.params.id;
    try{
      producto = await  Producto.deleteOne({_id: id})
      await res.status(200).send("Producto borrado de la base de datos")
    }
     catch (e) { loggerError.error(e) } 

}
