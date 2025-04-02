import express from "express"
import todoRouter from "./routes/todo.route.js"


const app = express()
app.use(express.json())

app.use('/api/todo',todoRouter)

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(err.status || 500).json({message: err.message})
})

export {app}