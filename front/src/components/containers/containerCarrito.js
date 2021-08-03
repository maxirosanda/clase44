import React , { useState, useEffect } from 'react'
import Carrito from '../renders/carrito'
import { Spinner } from 'react-bootstrap'
const axios = require('axios');

const ContainerCarrito= () => {
  const [productos, setProductos] = useState({})
  const [loading,setLoading] = useState(false)

  useEffect( async () => {
    setLoading(true)
   
    var config = {
      method: 'get',
      url: `http://localhost:8080/carrito`,
      headers: { 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
      },
      withCredentials: true
    };
    
    try{
    const response = await axios(config);

        setProductos(response.data.productos)
    }catch(e){
        console.log(e)
    }

    },[productos])

    useEffect(()=>{
        productos.length && setLoading(false)
  
    },[productos])
    
    const borrarproducto = async e => {
      e.preventDefault()
      var config = {
        method: 'delete',
        url: `http://localhost:8080/carrito/${e.target.name}`,
        headers: { },
        data : '',
        withCredentials: true
      };
      try{
        const response = await axios(config);
  
      
        }catch(e) {
          console.log(e);
        }
   
    }
  return <React.Fragment> 
<div className="container mt-5">
      <h1>Carrito</h1>
  <div className="row justify-content-center">

{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
          productos.length && productos.map((producto) => {
            return <Carrito key ={producto.actualizar} borrarproducto={borrarproducto} producto = {producto}/>
       })

 )}
  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerCarrito