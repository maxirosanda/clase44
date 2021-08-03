import React from 'react' 

const Agregar = ({producto,actproducto,actDatos,borrarproducto}) => {

  return <React.Fragment> 
      <h2>Producto: {producto.nombre} con Id: {producto._id}</h2>
      <form onSubmit={actproducto}  className="mt-5">
      <input type="text"  className="form-control mt-2" onChange={actDatos} id={producto._id} name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"/>
      <input type="text" className="form-control mt-2" onChange={actDatos}  id={producto._id} name="url" defaultValue={producto.url} aria-describedby="emailHelp"   />
      <input type="text" className="form-control mt-2" onChange={actDatos}  id={producto._id} name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp" />
      <input type="number" className="form-control mt-2" onChange={actDatos}  id={producto._id} name="precio" defaultValue={producto.precio} aria-describedby="emailHelp"/>
      <input type="number" className="form-control mt-2" onChange={actDatos}  id={producto._id} name="stock"  defaultValue={producto.stock} aria-describedby="emailHelp"/>
      <button type="submit"  className="btn btn-primary mt-2">Actualizar</button>
      </form>
      <form onSubmit={borrarproducto} name={producto._id} className="mb-5 mt-2">
      <button type="submit"  className="btn btn-primary">Borrar</button>
      </form>
  


  </React.Fragment>
  }
  
  export default Agregar