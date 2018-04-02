const express = require('express')
const expressGraphql = require('express-graphql')
const { buildSchema } = require('graphql')
require('dotenv').config()

// GraphQL schema with Interface Definition Language (IDL)
const schema = buildSchema(`
  type Query {
    message: String
  }
`)

// Root resolver
let root = {
  message: () => 'Hello World!'
}

// Createing an express server and a GraphQL endpoint
const app = express()
app.use('/graphql', expressGraphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

let port = process.env.HOST_PORT || 4000

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err)
  }

  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`)
})
