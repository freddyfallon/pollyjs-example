const path = require('path')
const { setupPolly } = require('setup-polly-jest')
const { Polly } = require('@pollyjs/core')
const NodeHttpAdapter = require('@pollyjs/adapter-node-http')
const FSPersister = require('@pollyjs/persister-fs')

Polly.register(NodeHttpAdapter)
Polly.register(FSPersister)

module.exports = () =>
  setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve('./__recordings__')
      }
    }
  })
