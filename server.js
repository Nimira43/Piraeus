const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = 3000

server.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})