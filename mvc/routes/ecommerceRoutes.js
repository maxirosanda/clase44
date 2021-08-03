const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const PedidoController = require('../controllers/pedidoController');
const MensajesController = require('../controllers/mensajesController');
const middlewareAdmin = require('../middlewares/middlewareAdmin')
const middlewareEditor = require('../middlewares/middlewareEditor')
const middlewareComprador = require('../middlewares/middlewareComprador')
const sessionController = require('../controllers/sessionController')
const passport = require("passport");
const { graphqlHTTP } = require("express-graphql");
const rootProductos = require("../graphql/rootProductos")
const schemaProductos = require("../graphql/schemaProductos")
module.exports = app => {
  
  app.use('/graphql', graphqlHTTP({schema:schemaProductos,rootValue: rootProductos,graphiql: true}));

  app.get("/logout", sessionController.logout);
  app.get("/failLogin", (req, res) => { res.send("falla al logear")});
  app.get("/failRegister", (req, res) => { res.send("falla al registrar")});
  app.post("/login", passport.authenticate('login', {failureRedirect: 'failLogin'}), sessionController.login);
  app.post("/register", passport.authenticate('register', {failureRedirect: 'failRegister'}), sessionController.register);
  
  app.get("/facebook", passport.authenticate("facebook"));
  app.get("/facebook/callback", passport.authenticate('facebook', {successRedirect: '/agregar', failureRedirect: '/login'}));
  app.get("/activo",sessionController.activo)

  app.get("/datos",sessionController.vistadatos)
  app.put('/actdatos',sessionController.updateDatos);

  app.get("/agregar",ProductosController.agregar)
  app.get('/',ProductosController.getProductos);
  app.get('/producto/:id',ProductosController.getProducto);
  app.post('/productos',ProductosController.createProductos);
  app.put('/productos/:id', ProductosController.updateProducto);
  app.delete('/productos/:id', ProductosController.deleteProductos);

  app.get('/carrito', CarritoController.getCarritos);
  app.post('/carrito', CarritoController.createCarrito);
  app.put('/carrito/:id',CarritoController.updateCarrito);
  app.delete('/carrito/:id', CarritoController.deleteCarrito);

  app.get('/comprar', PedidoController.createPedido);
  app.get('/pedidos',PedidoController.getPedidos);
  app.get('/pendientes', PedidoController.getPendientes);

  app.post('/mensajes', MensajesController.createMensajes);

}