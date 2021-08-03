import React from 'react' 

const Carrito = ({producto,borrarproducto}) => {


  return <React.Fragment> 
      <img src={producto.url} style={{"width": "25%"}}  className="img-fluid mt-3" alt="Responsive image"/>
      <input type="text" className="form-control mt-3" name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"  readOnly/>
      <input type="hidden" className="form-control mt-3" name="url" defaultValue={producto.url} aria-describedby="emailHelp"   readOnly/>
      <input type="text" className="form-control mt-3" name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp" readOnly />
      <input type="text" className="form-control mt-3" name="codigo" defaultValue={producto.codigo} aria-describedby="emailHelp" readOnly/>
      <input type="number" className="form-control mt-3" name="precio" defaultValue={producto.precio} aria-describedby="emailHelp"  readOnly/>
      <input type="number" className="form-control my-3" name="cant_compra"  defaultValue={producto.cant_compra} aria-describedby="emailHelp" />
      <form onSubmit={borrarproducto} name={producto._id} className="mb-5 mt-2">
      <button type="submit"  className="btn btn-primary">Borrar</button>
      </form>

  </React.Fragment>
  }
  
  export default Carrito