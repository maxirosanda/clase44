import React , { useState, useEffect } from 'react'
import MisDatos from '../renders/misDatos'
import { Spinner } from 'react-bootstrap'
const axios = require('axios');


const ContainerMisDatos = () => {
    const [datos, setDatos] = useState({}) 
    const [loading,setLoading] = useState(false)
    const [actDatos, setActDatos] = useState({})

    const act = (e) => {
        setActDatos({...actDatos,[e.target.name]: e.target.value});
      };
  // ver Datos---------------------------------------------------
  useEffect(async () => {
   
    setLoading(true)

  
    var config = {
      method: 'get',
      url: `http://localhost:8080/datos`,
      headers: { 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
      },
      withCredentials: true
    };
    
    try{
    const response = await axios(config);
    setDatos(response.data.datos)
    }catch(e){
      
        console.log(e)
    }

      },[datos])

    useEffect(()=>{

        datos.length && setLoading(false)
    },[datos])
//actualizar datos --------------------------------------
const actdatos = async e => {
    e.preventDefault()
    setActDatos({...actDatos,"_id": e.target.name});
    var config = {
      method: 'put',
      url: `http://localhost:8080/actdatos`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : actDatos,
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
      <h1>Mis Datos</h1>
  <div className="row justify-content-center">
  { 
        loading ? ( <Spinner animation="border" role="status"/>
        ):( datos.length && <MisDatos datos={datos[0]} actdatos={actdatos} act={act} /> )  
             
}  



  </div>
  </div>
      
  </React.Fragment>
  }
  
  export default ContainerMisDatos