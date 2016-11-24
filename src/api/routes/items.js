import { Router } from 'express'
import * as controller from '../controllers/items'

const router = Router()

router.route('/')
    .get(controller.list)
    .post(controller.create)

router.route('/:id')
    .get(controller.read)
    .put(controller.replace)
    .patch(controller.update)
    .delete(controller.remove)

export default router