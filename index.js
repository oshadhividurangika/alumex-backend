import express from "express"
import mongoose from "mongoose"
import Profile from "./Models/Profile.js"
import ProfileRouter from "./Routers/ProfileRouter.js"
import UserRouter from "./Routers/UserRouter.js"
import authenticateUser from "./MiddleWares/authentication.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app =express()

const mongodbURL=process.env.MONGO_URI

mongoose.connect(mongodbURL).then(
        ()=>{
            console.log("Connected to MongoDB")
        }
    
)

app.use(cors())
app.use(express.json())
app.use(authenticateUser)
app.use("/api/profiles",ProfileRouter)
app.use("/api/users", UserRouter)

app.put("/",()=>
    {console.log("Put Request Received")}
)

app.delete("/",()=>
    {console.log("Delete Request Received")}
)

app.listen(3000,()=>
    {console.log("Sever is running on port 3000")}
)