'use strict'

const fp = require('fastify-plugin')
var Redis = require('ioredis')

function fastifyRedis (fastify, options, next) {
  var client = null

  try {
    client = new Redis(options)
  } catch (err) {
    return next(err)
  }

  fastify
    .decorate('redis', client)
    .addHook('onClose', close)

  next()
}

function close (fastify, done) {
  fastify.redis.quit(done)
}

module.exports = fp(fastifyRedis, '>=0.13.1')
