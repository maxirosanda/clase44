import React from 'react'
import Productos from '../renders/productos'
import { Spinner } from 'react-bootstrap'
import { useQuery } from "@apollo/react-hooks";

import { gql } from "apollo-boost";
const axios = require('axios');


const GET_PRODUCTOS = gql`
  {
    productos{
      _id
      nombre
      descripcion
      precio
      stock
      url
    }
  }
`;


const ContainerProductos= () => {

  //const [idUsuario, setIdUsuario] = useState({})
  const { loading, error, data } = useQuery(GET_PRODUCTOS);

  
    const agregarcarrito = async e => {
      let json = {}
      e.preventDefault()
      for (let i = 0; i < 6; i++) {
       if(e.target[i].name==="nombre") json.nombre = e.target[i].value
       if(e.target[i].name==="descripcion")  json.descripcion = e.target[i].value
       if(e.target[i].name==="precio") json.precio = e.target[i].value
       if(e.target[i].name==="codigo")  json.codigo = e.target[i].value
       if(e.target[i].name==="url")  json.url = e.target[i].value
       if(e.target[i].name==="cant_compra")  json.cant_compra = e.target[i].value
       //json.id_comprador = idUsuario
      }
     var config = {
      method: 'post',
      url: 'http://localhost:8080/carrito',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : json,
      withCredentials: true

    };

    try{
    await axios(config);

  
    }catch(e) {
      console.log(e);
    }


    }
  
    if (loading) return  <Spinner animation="border" role="status"/>
    if (error) {
      return <p>Error</p>;
    }
  return <React.Fragment> 
<div className="container mt-5">
      <h1>Productos</h1>
  <div className="row justify-content-center">
      
     
{ 
    
          data.productos.length && data.productos.map((producto) => {
            return <Productos key ={producto._id}   producto = {producto} agregarcarrito={agregarcarrito}/>
       })
}

  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerProductos