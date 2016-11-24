import * as service from '../services/items'

export const list = (req, res, next) => {
  service.findAll()
    .then(items => res.send(items))
    .catch(next)
}

export const create = (req, res, next) => {
  service.insert(req.body)
    .then(item => res.send(item))
    .catch(next)
}

export const read = (req, res, next) => {
  service.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
}

export const update = (req, res, next) => {
  service.update(req.params.id, req.body)
    .then(item => res.send(item))
    .catch(next)
}

export const replace = (req, res, next) => {
  service.replace(req.params.id, req.body)
    .then(item => res.send(item))
    .catch(next)
}

export const remove = (req, res, next) => {
  service.remove(req.params.id)
    .then(() => res.send('DONE'))
    .catch(next)
}