import shortid from 'shortid'

let items = []

export const findAll = () => Promise.resolve(items)

export const findById = (id) => new Promise(resolve => {
  let result = items.find(item => item.id == id)
  if (!result) throw Error('Item Not Found')
  resolve(result)
})

export const insert = (item) => {
  item.id = shortid.generate()
  items.push(item)
  return Promise.resolve(item)
}

export const update = (id, item) => {
  let pos = items.findIndex(item => item.id == id)
  Object.assign(items[pos], item, { id })
  return Promise.resolve(items[pos])
}

export const replace = (id, item) => {
  let pos = items.findIndex(item => item.id == id)
  items[pos] = Object.assign({}, item, {id})
  return Promise.resolve(items[pos])
}

export const remove = (id) => {
  items = items.filter(item => item.id != id)
  return Promise.resolve()
}
