import express from "express";
import dotenv from "dotenv"
import userRouter from "./routes/users.js";
import blogsRouter from "./routes/blogs.js";
import commentsRouter from "./routes/comments.js";

const app = express()
dotenv.config()
app.use(express.json())


app.get("/", (req,res) => {
    res.send("<h1>Hello</h1")
})

//ROUTES v1
app.use("/api/v1/users/",userRouter)
app.use("/api/v1/blogs/",blogsRouter)
app.use("/api/v1/comments/",commentsRouter)

//MANGING ERRORS
app.use((req,res,next) => {
    return res.status(404).json({
        message:"Not found",
        data:[]
   })
})

app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})