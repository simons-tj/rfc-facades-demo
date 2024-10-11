const { getContent } = require('./content-service')

describe('getContent', () => {
  setupSpiesAndMocks()

  it('should return content by id', async () => {
    const content = await getContent(1)
    expect(content).toEqual({ id: 1, title: 'Content 1' })
  })

  it('should throw an error if content is not found', async () => {
    try {
      await getContent(999)
    } catch (err) {
      expect(err.message).toEqual('Content not found')
    }
  })
})
