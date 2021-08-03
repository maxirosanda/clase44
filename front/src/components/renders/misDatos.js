
import React from 'react'


const MisDatos = ({datos,act,actdatos}) => {

  return <React.Fragment> 
<h2>Mis Datos Personales</h2>
<form onSubmit={actdatos} name={datos._id} enctype="multipart/form-data">
  <div className="form-group">
    <label>Nombre de usuario</label>
    <input type="text" className="form-control" name="username" onChange={act}   aria-describedby="emailHelp" defaultValue={datos.username}/>
  </div>
  <div className="form-group">
    <label>Nombre y apellido</label>
    <input type="text"className="form-control" name="nombre" onChange={act}  aria-describedby="emailHelp"defaultValue={datos.nombre}/>
  </div>
   <div className="mb-3">
    <label for="imagen">Ingresar foto de perfil</label>
    <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={act}  className="form-control-file" name="foto" />
  </div>
   <div className="form-group">
    <label>Mail</label>
    <input type="text" className="form-control" name="mail" onChange={act}  aria-describedby="emailHelp" defaultValue={datos.mail}/>
  </div>
   <div className="form-group">
    <label>Edad</label>
    <input type="text" className="form-control" name="edad" onChange={act}   aria-describedby="emailHelp" defaultValue={datos.edad}/>
  </div>
    <div className="form-group">
    <label>Direccion</label>
    <input type="text" className="form-control" name="direccion" onChange={act}   aria-describedby="emailHelp" defaultValue={datos.direccion}/>
  </div>
    <div className="form-group">
    <label>Codigo de area</label>
    <input type="text" className="form-control" name="pre_tel" onChange={act}   aria-describedby="emailHelp" defaultValue={datos.pre_tel}/>
  </div>
     <div className="form-group">
    <label>Telefono</label>
    <input type="text" className="form-control" name="tel" onChange={act}   aria-describedby="emailHelp" defaultValue={datos.tel}/>
  </div>
  <input type="hidden"  className="form-control" name="foto" onChange={act} defaultValue={datos.foto}/>
  <button type="submit" className="btn btn-primary">Actualizar</button>
</form>

  </React.Fragment>
  }
  
  export default MisDatos




