import express from 'express'
import { createUser, getUsers, logout, signIn } from '../controllers/users/index.js'

const router = express.Router()

router.get("/", getUsers)
router.get("/logout",logout)
router.post("/signin",signIn)
router.post("/", createUser)
router.patch("/", () => {})
router.delete("/", () => {})

export default router