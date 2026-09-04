import mongoose from "mongoose";

const profileSchema=new mongoose.Schema(
    {
        ProfileName:{
            type:String,
            required:true,
            unique:true
        },
        // altNames:{
        //     type:[String],
        //     required:false,
        //     default:[]
        // },
        // Type:{
        //     type:String,
        //     required:true
        // },
        Temp:{
            type:String,
            required:true
        },
        Alloy:{
            type:Number,
            required:true
        },
        Plant:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true,
            //default:
        },
        drawing:{
            type:String,
            required:true,
            //default:
        },
        isAvailable:{
            type: Boolean,
            required: false,
            default: true
        }
    }
)

const Profile=mongoose.model("Profile",profileSchema)

export default Profile