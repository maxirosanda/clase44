const Producto = require ("../models/productos");
const generador  = require("../utils/generador")
const rootProductos = {
    ping() {
        return "pong";
      },
     productos: async () => {
        return await Producto.find();
      },
     createProducto: async ({ nombre,descripcion, precio,stock,url}) => {
        const newProducto = new Producto({ nombre,descripcion, precio,stock,url });
        return await newProducto.save();
      },
      deleteProducto: async ({_id}) => {
    try{
      console.log(_id)
      await Producto.deleteOne({_id: _id})
      
    }
     catch (e) { loggerError.error(e) } 
      },
      updateProducto: async ({_id,nombre,descripcion, precio,stock,url}) => {

  let nuevoproducto={}
  if(nombre) nuevoproducto.nombre=nombre
  if(descripcion) nuevoproducto.descripcion=descripcion
  if(precio) nuevoproducto.precio=precio
  if(stock) nuevoproducto.stock= stock
  if(url) nuevoproducto.url=url
  nuevoproducto.actualizar= generador(20)
  console.log(nuevoproducto)

  try{
    return await Producto.findOneAndUpdate(
    {_id: _id},
    {$set:nuevoproducto},
    {new:true}
    )
  }
  catch (e) { loggerError.error(e) }
  }
}

module.exports = rootProductos
