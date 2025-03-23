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
  socket.on('Message from Server',
  (message) => {
    console.log(message)
  })
  console.log(`A new user connected with ID: ${socket.id}`)
})

server.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})