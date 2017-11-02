# fastify-ioredis

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  [![Build Status](https://travis-ci.org/wotermelon/fastify-ioredis.svg?branch=master)](https://travis-ci.org/wotermelon/fastify-ioredis)

Ioredis for Fastify.

## Install
```
npm i fastify-ioredis --save
```
## Usage
Add it to you project with `register` and you are done!
You can access the *Redis* client via `fastify.redis`.

More usage see [Ioredis](https://github.com/luin/ioredis)
```js
const fastify = require('fastify')

fastify.register(require('fastify-ioredis'), {
  host: '127.0.0.1'
}, err => {
  if (err) throw err
})

fastify.get('/foo', (req, reply) => {
  const { redis } = fastify
  redis.get(req.query.key, (err, val) => {
    reply.send(err || val)
  })
})

fastify.post('/foo', (req, reply) => {
  const { redis } = fastify
  redis.set(req.body.key, req.body.value, (err) => {
    reply.send(err || { status: 'ok' })
  })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

## License

Licensed under [MIT](./LICENSE).
