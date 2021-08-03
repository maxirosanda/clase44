const assert = require('chai').assert;
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

let id_producto =""
let url_producto=""

let nombre_producto="mocha3"
let descripcion_producto="descricion mocha"
let precio_producto=12000
let stock_producto=32



describe("Productos: crear,leer,actualizar y borrar", ()=>{
  
   
        it("Agregar un Producto",async () => {
          
    var data = new FormData();
    data.append('url', fs.createReadStream('/Users/maxi/Desktop/logo192.png'));
    data.append('nombre', nombre_producto);
    data.append('descripcion', descripcion_producto);
    data.append('precio', precio_producto);
    data.append('stock', stock_producto);

    var config = {
      method: 'post',
      url: 'http://localhost:8080/productos',
      headers: { 
        'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs', 
        ...data.getHeaders()
      },
      data : data
    };

    try{
    const response = await axios(config);
  
      id_producto = await response.data._id;
      url_producto = await response.data.url
      assert.equal(response.data.nombre,nombre_producto)
      assert.equal(response.data.descripcion,descripcion_producto)
      assert.equal(response.data.precio,precio_producto)
      assert.equal(response.data.stock,stock_producto)  
  
    }catch(e) {
      console.log(e);
    }
    return
})

//------------------------------------------------------------------------------------------

it("traer producto",async ()=>{
  
  var config = {
    method: 'get',
    url: `http://localhost:8080/producto/${id_producto}`,
    headers: { 
      'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
    }
  };
  
  try{
  const response = await axios(config);
  
  assert.equal(response.data[0].nombre,nombre_producto)
  assert.equal(response.data[0].descripcion,descripcion_producto)
  assert.equal(response.data[0].precio,precio_producto)
  assert.equal(response.data[0].stock,stock_producto) 
  }catch(e) {
   console.log(e);
  }
  
  return
  
})
  

//---------------------------------------------------------------------------------

it("actualizar producto", async ()=>{

  var data = JSON.stringify({
    "nombre": "actualizar mocha19",
    "descripcion": "descripcion actualizada mocha",
    "precio": 2323,
    "stock": 32,
    "urldos": url_producto
  });
  
  var config = {
    method: 'put',
    url: `http://localhost:8080/productos/${id_producto}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
    },
    data : data
  };
  try{
  const response = await axios(config);
    assert.equal(response.data.nombre,"actualizar mocha19")
    assert.equal(response.data.descripcion,"descripcion actualizada mocha")
    assert.equal(response.data.precio, 2323)
    assert.equal(response.data.stock,32)
  }catch(e) {
    console.log(e);
  }
  return
  })


//---------------------------------------------------------------------------------------------

it("borrar producto",async ()=>{
  
  var data = JSON.stringify({
    "url": `${url_producto}`
  });
  
  var config = {
    method: 'delete',
    url: `http://localhost:8080/productos/${id_producto}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Cookie': 'connect.sid=s%3AkJ8y18B1hrC4fkfBdIGOvRoFiv0CWMwe.Ev0l5Jyd0xY%2FuGbgBfAv2Oy%2F6JF5A%2FiXJc2FpoM15fs'
    },
    data : data
  };

  try{
  const response = await axios(config);
  assert.equal(response.data.deletedCount, 1);
  }catch(e) {
  console.log(e);
  }
    return
})


})
