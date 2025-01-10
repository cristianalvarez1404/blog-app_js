import express from 'express'

const router = express.Router()

router.get("/", (req,res) => res.send("Hello world from  router"))
router.post("/", () => {})
router.patch("/", () => {})
router.delete("/", () => {})

export default router