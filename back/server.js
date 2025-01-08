import express from "express";
import dotenv from "dotenv"

const app = express()
dotenv.config()


app.get("/", (req,res) => {
    res.send("<h1>Hello</h1")
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})