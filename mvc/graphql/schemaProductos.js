const { buildSchema } = require("graphql");

const schemaProductos = buildSchema(`
type Query {
  ping: String!
  productos: [Productos!]
}

type Mutation {
  createProducto(
    nombre: String!,
    descripcion: String!,
    precio:Float!,
    stock:Int!,
    url:String!
  ): Productos,
  updateProducto(
    _id:String!,
    nombre: String,
    descripcion: String,
    precio:Float,
    stock:Int,
    url:String
  ): Productos,
  deleteProducto(
    _id:String
  ):Productos
}

type Productos {
  _id: ID!,
  nombre: String,
  descripcion: String,
  precio:Float,
  stock:Int,
  url:String
}
`)
module.exports = schemaProductos