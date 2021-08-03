import React , { useState, useEffect } from 'react'
import Producto from '../renders/producto'
import Mensajes from '../renders/mensajes'
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
const axios = require('axios');

const ContainerProducto= () => {
  const [producto, setProducto] = useState({})
  const [mensajes, setMensajes] = useState({})
  const [crearMensaje, setCrearMensaje] = useState({})
  const [loading,setLoading] = useState(false)
  const { id } = useParams()
  const [idUsuario, setIdUsuario] = useState({})


  useEffect(async () => {
    setLoading(true)
    var config = {
      method: 'get',
      url: `http://localhost:8080/producto/${id}`,
      headers: { 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
      },
      withCredentials: true
    };
    
    try{
    const response = await axios(config);
      setProducto(response.data.producto)
      setIdUsuario(response.data.id_usuario)
      setMensajes(response.data.mensaje)
      setIdUsuario(response.data.id_usuario)
    }catch(e){
        console.log(e)
    }

      },[producto])

    useEffect(()=>{
        producto.length && setLoading(false)
      
    },[producto])

    const agregarcarrito = async e => {
      let json = {}
      e.preventDefault()
      for (let i = 0; i < 6; i++) {
       if(e.target[i].name=="nombre") json.nombre = e.target[i].value
       if(e.target[i].name=="descripcion")  json.descripcion = e.target[i].value
       if(e.target[i].name=="precio") json.precio = e.target[i].value
       if(e.target[i].name=="codigo")  json.codigo = e.target[i].value
       if(e.target[i].name=="url")  json.url = e.target[i].value
       if(e.target[i].name=="cant_compra")  json.cant_compra = e.target[i].value
       json.id_comprador = idUsuario
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
    const response = await axios(config);

  
    }catch(e) {
      console.log(e);
    }


    }

    const enviarMensaje = async e => {
      e.preventDefault()
      var config = {
        method: 'post',
        url: 'http://localhost:8080/mensajes',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : crearMensaje,
        withCredentials: true
      };
  
      try{
      const response = await axios(config);

    
      }catch(e) {
        console.log(e);
      }
   
    }

    const CrearMensaje = (e) => {
      let valor = 0
      if(e.target.name=="mensaje"){
      valor = e.target.id
      }
      setCrearMensaje({...crearMensaje,[e.target.name]: e.target.value,"articulo": valor});
    };
  return <React.Fragment> 
       
{ 
        loading ? ( <Spinner animation="border" role="status"/>
        ):( producto.length && <Producto key ={producto[0].actualizar} enviarMensaje={enviarMensaje} CrearMensaje={CrearMensaje} producto = {producto[0]} agregarcarrito={agregarcarrito}/> )  
             
}  

{

  mensajes.length && mensajes.map((mensaje) => {
  return <Mensajes key ={mensaje._id} mensajes={mensaje}  />
  })
 
}
  </React.Fragment>
  }
  
  export default ContainerProducto