const setupPolly = require('./tests/setupTests')
const getPosts = require('./index')
const { POSTS_URL } = require('./constants')

describe('getPosts with Polly', () => {
  setupPolly()

  test('should return posts', async () => {
    const result = await getPosts(POSTS_URL)
    expect(result.length).toBe(100)
  })
})

describe('getPosts without Polly', () => {
  test('should return posts', async () => {
    const result = await getPosts(POSTS_URL)
    expect(result.length).toBe(100)
  })
})
