// import fixtires
const coursesData = require('./data-fixtures')

const filterCourse = id => course => course.id === id

const getCourse = args => {
  let id = args.id
  return coursesData.filter(filterCourse(id))[0]
}

const getCourses = args => {
  if (args.topic) {
    let topic = args.topic
    return coursesData.filter(course => course.topic === topic)
  } else {
    return coursesData
  }
}

const updateCourseAuthor = ({id, author}) => {
  coursesData.map(course => {
    if (course.id === id) {
      course.author = author
      return course
    }
  })
  return coursesData.filter(filterCourse(id))[0]
}

const root = {
  course: getCourse,
  courses: getCourses,
  updateCourseAuthor: updateCourseAuthor
}

module.exports = root
