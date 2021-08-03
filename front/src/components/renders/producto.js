import React from 'react'


const Producto = ({producto,enviarMensaje,agregarcarrito,CrearMensaje}) => {

  return <React.Fragment> 
    <div className="container">
      <h1>Producto en Detalle</h1>
<a href="/carrito" className="btn btn-success mx-3">Ir al carrito</a>
<a href="/" className="btn btn-success">Volver a Home productos</a>
  <div className="row justify-content-center">
<div className="card mb-3 mt-5">
  <img src={producto.url} className="card-img-top " style={{"width": "25%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5><p>{producto.descripcion}</p>
    <p className="card-text"><small className="text-muted">El codigo de Producto es : {producto._id}</small></p>
    <h5>Precio: {producto.precio}</h5>
    <form onSubmit={agregarcarrito}>
      <input type="hidden" className="form-control mt-3"  name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"  readOnly/>
      <input type="hidden" className="form-control mt-3"  name="url"defaultValue={producto.url} aria-describedby="emailHelp"   readOnly/>
      <input type="hidden" className="form-control mt-3"  name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp"  />
      <input type="hidden" className="form-control mt-3"  name="codigo" defaultValue={producto._id} aria-describedby="emailHelp" />
      <input type="hidden" className="form-control mt-3"  name="precio" defaultValue={producto.precio} aria-describedby="emailHelp"  readOnly/>
      <input type="number" className="form-control mt-3"   name="cant_compra" min="1" defaultValue="1" max={producto.stock} aria-describedby="emailHelp"/>
      <button type="submit" className="btn btn-primary mt-3">Agregar al Carrito</button>
      </form>
      </div>
      </div>
</div>
<h2>Consultas sobre el producto</h2>
  <form className="my-3" onSubmit={enviarMensaje}>
  <input type="text" className="form-control mb-4" name="mail" onChange={CrearMensaje}  aria-describedby="emailHelp" placeholder="Ingrese su mail" required/> 
  <textarea type="text" className="form-control" name="mensaje" id={producto._id} onChange={CrearMensaje}  aria-describedby="emailHelp" placeholder="Ingrese mensaje" required></textarea>
 
<button type="submit" className="btn btn-primary mt-3">Enviar Mensaje</button>
  </form>



</div>
  </React.Fragment>
  }
  
  export default Producto