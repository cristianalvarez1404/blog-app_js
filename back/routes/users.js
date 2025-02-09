import express from 'express'
import { createUser, getUsers } from '../controllers/users/index.js'

const router = express.Router()

router.get("/", getUsers)
router.post("/", createUser)
router.patch("/", () => {})
router.delete("/", () => {})

export default router