import dbConnect from "./db/db.js"
import dotenv from "dotenv"
import { app } from "./app.js"

dotenv.config({
    path:".env"
})



dbConnect()
.then(()=>{
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port ${process.env.PORT}`)})
})
