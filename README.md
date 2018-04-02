# nodejs+express+graphql app [![CircleCI](https://circleci.com/gh/eidicon/nodejs-graphql/tree/master.svg?style=svg)](https://circleci.com/gh/eidicon/nodejs-graphql/tree/master)
this is kind of reminder based on [`this`][1] blog post 

**before moving forward you have check if current packages installed (_latest versions_)**
- [nodejs][3]
- [yarn][4]

## to run server
```
yarn run server
``` 

## requset to fetch one course:
***request***
```
query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}
```
***queryVariables***
```
{
  "courseID": 1
}
```

## requset to fetch all courses by topic:
***request***
```
query getAllCourse($topic: String!) {
  courses(topic: $topic) {
    title
    author
    description
    url
  }
}
```
***queryVariables***
```
{
  "topic": "Node.js"
}
```
## requset to fetch data with aliases & fragments:
***request***
```
query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1) {
    ...courseFields
  },
  course2: course(id: $courseID2) {
    ...courseFields
  } 
}
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
```
***queryVariables***
```
{
  "courseID1": 1,
  "courseID2": 3
}
```
## mutation requset (change author):
***request***
```
mutation updateCourseAuthor($id: Int!, $author: String!) {
  updateCourseAuthor(id: $id, author: $author) {
    ... courseFields
  }
}
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
```
***queryVariables***
```
{
  "id": 1,
  "author": "Some Random Author"
}
```


[1]: https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
[3]: https://nodejs.org/en/download/
[4]: https://yarnpkg.com/en/docs/install