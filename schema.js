const { buildSchema } = require('graphql')

const schema = buildSchema(`
type Query {
  course(id: Int!): Course
  courses(topic: String): [Course]
},
type Mutation {
  updateCourseAuthor(id: Int!, author: String!): Course
},
type Course {
  id: Int
  title: String
  author: String
  description: String
  topic: String
  url: String
}
`)

module.exports = schema
