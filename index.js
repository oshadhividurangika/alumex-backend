import express from "express"
import mongoose from "mongoose"
import Profile from "./Models/Profile.js"
import ProfileRouter from "./Routers/ProfileRouter.js"
import UserRouter from "./Routers/UserRouter.js"
import authenticateUser from "./MiddleWares/authentication.js"

//console.log("Hello World...")

const app =express()

const mongodbURL="mongodb+srv://ADmin:AlU1234@cluster0.qxhubq9.mongodb.net/Profile?appName=Cluster0"

mongoose.connect(mongodbURL).then(
        ()=>{
            console.log("Connected to MongoDB")
        }
    
)

app.use(express.json())
app.use(authenticateUser)
app.use("/profiles",ProfileRouter)
app.use("/users", UserRouter)

app.put("/",()=>
    {console.log("Put Request Received")}
)

app.delete("/",()=>
    {console.log("Delete Request Received")}
)

app.listen(3000,()=>
    {console.log("Sever is running on port 3000")}
)