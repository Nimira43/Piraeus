const socket = io()

socket.on('connect', () => {
  console.log(`A user connected with ID: ${socket.id}`)
})