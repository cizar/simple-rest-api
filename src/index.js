import http from 'http'
import api from './api'

const server = http.createServer(api)

server.listen(process.env.PORT || 9000, () => {
  console.log('Listening on port %d', server.address().port)
})