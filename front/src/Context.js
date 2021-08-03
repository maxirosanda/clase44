import React, { useContext, useState, useEffect} from "react"
const axios = require('axios');
export  const ActivoContext = React.createContext([])
export  const useActivoContext= () => useContext(ActivoContext)
export const Context= ({children}) => {

const [activo, setActivo] = useState(true)
  
useEffect( async () => {
    
    var config = {
      method: 'get',
      url: `http://localhost:8080/activo`,
      headers: { 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
      },
      withCredentials: true
    };
    
    try{
    const response = await axios(config);
    setActivo(response.data.activo)
    }catch(e){
      
        console.log(e)
    }

      },[activo])
 
    return (
     <ActivoContext.Provider value={{activo}}>
            {children}
     </ActivoContext.Provider>
     )
   }

