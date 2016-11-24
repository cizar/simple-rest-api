import http from 'http'
import api from './api'

const server = http.createServer(api)

server.listen(process.env.PORT || 9000, () => {
  let addr = server.address()
  let hostname = addr.family === 'IPv6' ? `[${addr.address}]` : addr.address
  console.log('API is running! Try it out here... http://%s:%s/api/items', hostname, addr.port)
})
