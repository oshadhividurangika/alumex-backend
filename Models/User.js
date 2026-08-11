import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        EPFNo : {
            type : "String",
            required : true,
            unique : true
        },
        FirstName : {
            type : "String",
            required : true
        },
        LastName : {
            type : "String",
            required : true
        },
        password : {
            type : "String",
            required : true
        },
        isAdmin : {
            type : Boolean,
            required : false
        },
        isBlocked : {
            type : Boolean,
            required : false
        }
    }
)

const User=mongoose.model("User",userSchema)

export default User