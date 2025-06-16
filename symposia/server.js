const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = 3000

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.send('<h1>Symposia</h1>')
})

server.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})
