
import React from 'react'


const Login = ({crearDatos,login}) => {

  return <React.Fragment> 
<form  onSubmit={login} className="my-5">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
    <input type="text" className="form-control" name="username" aria-describedby="emailHelp" onChange={crearDatos}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={crearDatos}/>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>
<a href="/facebook" className="btn btn-success my-5">Login con facebook</a>
<a href="/register" className="btn btn-success my-5">Registrate</a>
  </React.Fragment>
  }
  
  export default Login





