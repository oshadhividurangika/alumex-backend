import express from "express"
import Profile from "../Models/User.js";
import { createUser, loginUser } from "../Controllers/UserController.js"

const UserRouter = express.Router()

UserRouter.post("/",createUser)
UserRouter.post("/login",loginUser)

export default UserRouter