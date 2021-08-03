import React from 'react'


const Mensajes = ({mensajes}) => {

  return <React.Fragment> 
      <div className="container">
 <ul className="list-group">
  <li className="list-group-item my-1"><b>{mensajes.mail}</b> : {mensajes.mensaje}</li>
 </ul>
 </div>
  </React.Fragment>
  }
  
  export default Mensajes


