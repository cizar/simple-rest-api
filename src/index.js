import http from 'http'
import api from './api'

const server = http.createServer(api)

const port = process.env.PORT || 9000

server.listen(port, () => {
  console.log('Server is running on port %d', server.address().port)
})
