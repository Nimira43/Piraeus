const PORT = 8000
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('This is port 8000.')
})

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})