import React from 'react' 
import ButtonLink from '../Button/ButtonLink'

const Productos = ({producto,agregarcarrito}) => {

  return <React.Fragment> 
    
      
      <img src={producto.url} style={{"width": "25%"}} className="img-fluid mt-3" alt="Responsive image"/>
      <form onSubmit={agregarcarrito}>
      <input type="text" className="form-control mt-3"  name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"  readOnly />
      <input type="hidden" className="form-control mt-3"  name="url"defaultValue={producto.url} aria-describedby="emailHelp" />
      <input type="text" className="form-control mt-3"  name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp"    readOnly/>
      <input type="text" className="form-control mt-3"  name="codigo" defaultValue={producto._id} aria-describedby="emailHelp"  readOnly />
      <input type="number" className="form-control mt-3"  name="precio" defaultValue={producto.precio} aria-describedby="emailHelp"   readOnly/>
      <input type="number" className="form-control mt-3"   name="cant_compra" min="1" defaultValue="1" max={producto.stock}  required aria-describedby="emailHelp"/>
      <button type="submit" className="btn btn-primary mt-3">Agregar al Carrito</button>
      </form>
      <ButtonLink  texto='Ver el producto en detalle' link={`/producto/${producto._id}`}></ButtonLink>
      
  


  </React.Fragment>
  }
  
  export default Productos