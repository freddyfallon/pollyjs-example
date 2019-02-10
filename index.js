const fetch = require('node-fetch')

const getPosts = async url => {
  const response = await fetch(url)
  const posts = await response.json()
  return posts
}

module.exports = getPosts
