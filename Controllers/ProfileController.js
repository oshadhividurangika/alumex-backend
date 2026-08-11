import express from "express"
import Profile from "../Models/Profile.js";
import { isAdmin } from "./UserController.js";

export async function CreateProfile(req,res)
    {
       if(!isAdmin(req)){
        res.status(403).json({
        message:"Access Denied. Admins Only."
        })
        return
       }
       
       try {

        const existingProfile=await Profile.findOne({
            ProfileName:req.body.ProfileName
        })

        if(existingProfile!=null){
            res.status(400).json({
                message:"Profile already exists"
            })
            return
        }

        const newProfile=new Profile({
            ProfileName:req.body.ProfileName,
            altNames:req.body.altNames,
            Temp:req.body.Temp,
            Alloy:req.body.Alloy,
            Plant:req.body.Plant,
            image:req.body.image,
            drawing:req.body.drawing,
            isAvailable:req.body.isAvailable
        })

        await newProfile.save()
        res.status(201).json({
            message:"Profile created successfully"
        })

       }catch(error){
        res.status(500).json({
            message:"Error creating profile"
        })
       }
    }

    export async function getAllProfiles(req,res){
        try{
            if(isAdmin(req)){
                const profiles=await Profile.find()
                res.json(profiles)
            }else{
                const profiles=await Profile.find({
                    isAvailable:true
                })
                res.json(profiles)
            }

        }catch(error){
            res.status(500).json({
                message:"Error fetching profiles"
            })
        }
    }

    export async function deleteProfiles(req,res){
        if(!isAdmin(req)){
            res.status(403).json({
                message:"Access denied. Admins only."
            })
            return
        }
        try{
            await Profile.deleteOne({
                ProfileName:req.params.ProfileName
            })
            res.json({
                message:"Profile deleted successfully"
            })

        }catch(error){
            res.status(500).json({
                message:"Error deleting profile"
            })
        }
    }

    export async function updateProfile(req,res){
        if(!isAdmin(req)){
            res.status(403).json({
                message:"Access denied. Admins only."
            })
            return
        }

        try{
            await Profile.updateOne({
                ProfileName:req.params.ProfileName
            },{
            altNames:req.body.altNames,
            Temp:req.body.Temp,
            Alloy:req.body.Alloy,
            Plant:req.body.Plant,
            image:req.body.image,
            drawing:req.body.drawing,
            isAvailable:req.body.isAvailable}
        )

            res.json({
                message:"Profile updated successfully"
            })

        } catch(error){
            res.status(500).json({
                message:"Error updating profile"
            })
        }
    }

  export async function getProfileByName(req, res) {
    try {
        const profile = await Profile.findOne({
            ProfileName: req.params.ProfileName
        })
        if (profile == null) {
            res.status(404).json({
                message: "Profile not found"
            })
        } else {
            if (isAdmin(req)) {
                res.json(profile)
            } else {
                res.status(403).json({
                    message: "Access denied. Admins only"
                })
            }
        }
    } catch {
        res.status(500).json({
            message: "Error fetching profile"
        })
    }
}