
import React from 'react'


const Register = ({crearDatos,register}) => {

  return <React.Fragment> 
<form  className="my-5" onSubmit={register}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese Usuario</label>
    <input type="text" className="form-control" name="username" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese Mail</label>
    <input type="email" className="form-control" name="mail" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={crearDatos}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su nombre</label>
    <input type="text" className="form-control" name="nombre" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su direccion</label>
    <input type="text" className="form-control" name="direccion" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su edad</label>
    <input type="number" className="form-control" name="edad" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su Prefijo telefonico</label>
    <input type="number" className="form-control" name="pre_tel" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su telefono</label>
    <input type="number" className="form-control" name="tel" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese su foto</label>
    <input type="text" className="form-control" name="foto" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Registrarme</button>
</form>
<a href="/facebook" className="btn btn-success my-5">Registro con facebook</a>
<a href="/login" className="btn btn-success my-5">Login</a>
  </React.Fragment>
  }
  
  export default Register





