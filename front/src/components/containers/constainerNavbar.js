import React , { useState, useEffect } from 'react'
import Navbar from '../renders/navbar'
const axios = require('axios');

const logout = (e) => {

    var config = {
      method: 'get',
      url: 'http://localhost:8080/logout',
      headers: { 
        'Cookie': 'connect.sid=s%3ABDGIH8xNzVQG5i6aMXZK_rNqmw6Tq9O3.8pJp1qaj%2FXOJhS78fMxtvJMPIGLA7DopkyyDe4Yz6Tg'
      },
      withCredentials: true
    };
    
    axios(config)
    .then(function (response) {
     // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }

const ContainerNavbar= () => {
 
  return <React.Fragment> 
<Navbar logout={logout} />
  </React.Fragment>
  }
  
  export default ContainerNavbar