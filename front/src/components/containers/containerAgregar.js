import React , { useState} from 'react'
import Agregar from '../renders/agregar'
import { Spinner } from 'react-bootstrap'
//import {useActivoContext} from '../../Context'
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


const CREATE_PRODUCTO = gql`
  mutation CreateProducto($nombre: String!, $descripcion: String!, $precio: Float!,$stock:Int!,$url:String!) {
    createProducto(nombre: $nombre, descripcion: $descripcion, precio: $precio, stock: $stock,url:$url) {
      _id
    }
  }
`;
const UPDATE_PRODUCTO = gql`
  mutation UpdateProducto($_id:String!,$nombre: String, $descripcion: String, $precio: Float,$stock:Int,$url:String) {
    updateProducto(_id:$_id ,nombre: $nombre, descripcion: $descripcion, precio: $precio, stock: $stock,url:$url) {
      _id
    }
  }
`;
const DELETE_PRODUCTO = gql`
  mutation DeleteProducto($_id:String!) {
    deleteProducto(_id:$_id) {
      _id
    }
  }
`;
const GET_PRODUCTOS = gql`
  {
    productos{
      _id
      nombre
      descripcion
      precio
      stock
      url
    }
  }
`;


const ContainerAgregar = () => {

  const [crearProducto, setCrearProducto] = useState({})
  const [actProducto, setActProducto] = useState({})
  const { loading, data } = useQuery(GET_PRODUCTOS);
  const [createProducto] = useMutation(CREATE_PRODUCTO);
  const [updateProducto] = useMutation(UPDATE_PRODUCTO);
  const [deleteProducto] = useMutation(DELETE_PRODUCTO);

  const crearDatos = (e) => {
    setCrearProducto({...crearProducto,[e.target.name]: e.target.value});
  };

  const actDatos = (e) => {
    let nombre= "_id"
    setActProducto({...actProducto,[nombre]: e.target.id,[e.target.name]: e.target.value});
  };

 
  const crearproducto =  async e => {
    e.preventDefault();
    crearProducto.precio =parseFloat(crearProducto.precio)
    crearProducto.stock =parseFloat(crearProducto.stock)
    await createProducto({variables: crearProducto });

  }
 
//borrar producto -----------------------------------
    
    const borrarproducto = async  e => {
      e.preventDefault()
      let _id = e.target.name
      await deleteProducto({variables:{_id}})
      
  
    }

//actualizar producto --------------------------------------

    const actproducto = async e => {
      e.preventDefault()
      console.log(actProducto)
      await updateProducto({variables: actProducto })
   

    }



  return <React.Fragment> 
<div className="container mt-5">
      <h1>Edicion de Productos</h1>
  <div className="row justify-content-center">
  <form  className="my-5" onSubmit={crearproducto}>

<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
  <input type="text" className="form-control" name="nombre" onChange={crearDatos} aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Descripcion</label>
  <input type="text" className="form-control" onChange={crearDatos} name="descripcion" aria-describedby="emailHelp"required/>
</div>
   <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Url</label>
  <input type="text" className="form-control" onChange={crearDatos} name="url" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Precio</label>
  <input type="number" className="form-control" onChange={crearDatos} name="precio" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Stock</label>
  <input type="number"className="form-control" onChange={crearDatos} name="stock" aria-describedby="emailHelp" required/>
</div>
 
<button   className="btn btn-primary" >Agregar</button>
</form> 
 
{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
          data.productos.length && data.productos.map((producto) => {
            return <Agregar key ={producto._id} producto = {producto} borrarproducto={borrarproducto} actproducto ={actproducto} actDatos={actDatos}/>
       })

 )
 
 
 }

  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerAgregar