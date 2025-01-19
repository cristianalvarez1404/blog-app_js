import express from 'express'
import { createUser } from '../controllers/users/index.js'

const router = express.Router()

router.get("/", (req,res,next) => res.send("Hello world from  router"))
router.post("/", createUser)
router.patch("/", () => {})
router.delete("/", () => {})

export default router