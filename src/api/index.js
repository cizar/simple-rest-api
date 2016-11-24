import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

const app = express()

app.use(bodyParser.json())

app.use('/api', router)

app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({ error: err.message || err })
})

export default app