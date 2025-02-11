const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Piraeus</h1>
      <hr />
      <h4>Live Stock Market Prices and News</h4>
    </div>
  `)
})

server.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})