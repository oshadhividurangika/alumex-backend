import express from "express"
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export async function createUser(req,res){

    if(req.user==null){
        res.status(403).json({
            message:"Unauthorized Access"
        })
        return
    }
    if(!req.user.isAdmin){
        res.status(403).json({
            message:"Only admins can create users"
        })
        return
    }

    try{
        const passwordHash=bcrypt.hashSync(req.body.password,10)

        const newUser= new User({
            EPFNo : req.body.EPFNo,
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            password : passwordHash,
            isAdmin: req.body.isAdmin || false
        })

        await newUser.save()

        res.json({
            message : "User Created Successfully"
        })
    }catch(error){
        res.json({
            message : "Error Creating User"
        })
    }

}

export async function loginUser(req,res){
    try{
        const user=await User.findOne({
            EPFNo:req.body.EPFNo
        })

        console.log(user)

        if(user==null){
            res.status(404).json({
                message : "User not found"
            })
        }else{
            const isPasswordCorrect=bcrypt.compareSync(req.body.password,user.password)

            if(isPasswordCorrect){

                const payload={
                    EPFNo:user.EPFNo,
                    FirstName:user.FirstName,
                    LastName:user.LastName,
                    isAdmin:user.isAdmin,
                    isBlocked:user.isBlocked, 
                }

                const token = jwt.sign(payload,process.env.JWT_SEC_KEY,{expiresIn:"24h"})
                
                res.json({
                    token:token,
                    isAdmin:user.isAdmin
                })

            }else{
                res.status(401).json({
                    message : "Invalid Password"
                })
            }
        }
    }catch(error){
        res.status(500).json()
    }
} 

export function isAdmin(req){
    if(req.user==null){
        return false
    }
    if(req.user.isAdmin){
        return true
    }else{
        return false
    }
}