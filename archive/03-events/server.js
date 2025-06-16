const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

console.log('SERVER-SIDE')
// Server Instance and Server Socket

io.on('connection', (socket) => {  
  socket.on('message',
  (msg) => {
    console.log(msg)
    socket.emit('message', 'Hello Client - I am The Server.')
  })
})

server.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})