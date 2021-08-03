import React , { useState } from 'react'
import Login from '../renders/login'
const axios = require('axios');


const ContainerLogin= () => {
    const [user, setUser] = useState({})

    const login = e => {
        e.preventDefault()
       
        var data = JSON.stringify(user);
        
        var config = {
          method: 'post',
          url: 'http://localhost:8080/login',
          headers: { 
            'Content-Type': 'application/json', 
            'Cookie': 'connect.sid=s%3AAn8PYiBPQ715mCdGct2Zidat_vxTldvx.PMY5kpnHHALtX0TQBP1gW2p%2FVJQnO6rV7goKuQwwoAw'
          },
          data : data,
          withCredentials: true
        };
        
        axios(config)
        .then(function (response) {
         console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
       
      }
    const crearDatos = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
        console.log(user)
      };


  

  return <React.Fragment> 
<div className="container mt-5">
      <h1>Login</h1>
  <div className="row justify-content-center">


     <Login crearDatos={crearDatos} login={login} />

  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerLogin