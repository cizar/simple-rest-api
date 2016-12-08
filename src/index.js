import http from 'http'
import api from './api'

const server = http.createServer(api)

const port = process.env.PORT || 9000
const host = process.env.HOST || 'localhost'

server.listen(port, host, () => {
  let addr = server.address()
  let hostname = addr.family === 'IPv6' ? `[${addr.address}]` : addr.address
  console.log('API is running! Try it out here... http://%s:%s/api/items', hostname, addr.port)
})
