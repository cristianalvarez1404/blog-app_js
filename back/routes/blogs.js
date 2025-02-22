import express from 'express'
import { createTask } from '../controllers/blogs/index.js'

const router = express.Router()

router.get("/", () => {})
router.post("/", createTask)
router.patch("/", () => {})
router.delete("/", () => {})

export default router