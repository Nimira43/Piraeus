const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const port = 3000

app.use(express.static('client'))

server.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})
