const { getAuthorAndCourses } = require('./author-content')

describe('getAuthorAndCourses', () => {
  setup()

  it('should get stuff', () => {
    const authorId = 1
    const courses = getAuthorAndCourses(authorId)
    expect(courses).to.eql([
      { id: 1, author: 1, title: 'Course 1' },
      { id: 2, author: 1, title: 'Course 2' },
    ])
  });
})
