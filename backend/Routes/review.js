import express from 'express'
import { createReviews, getAllReviews } from '../Controllers/reviewControllers.js'
import { authenticate, restrict } from '../auth/verifyToken.js'

const router = express.Router({mergeParams:true})

router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReviews)

export default router