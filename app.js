import express from "express"
import todoRouter from "./routes/todo.route.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
const reqLogger = (req,res,next)=>{
    console.log(Date.now(),req.method,req.url);
    next()
}

app.use(reqLogger)


app.use('/api/todo',todoRouter)

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(err.status || 500).json({message: err.message})
})

export {app}