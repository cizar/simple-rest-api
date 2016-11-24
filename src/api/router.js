import { Router } from 'express'
import itemsRoute from './routes/items'

const router = Router()

router.use('/items', itemsRoute)

export default router