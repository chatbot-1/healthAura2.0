import express from 'express'
import { register, login } from '../Controllers/authController.js'

const router = express.Router()
router.post('/sign-up', register)
router.post('/log-in', login)

export default router