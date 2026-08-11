import express from "express"
import Profile from "../Models/Profile.js";
import {  CreateProfile, getAllProfiles, deleteProfiles, updateProfile, getProfileByName  } from "../Controllers/ProfileController.js";

const ProfileRouter=express.Router();

ProfileRouter.get("/",getAllProfiles)
ProfileRouter.post("/",CreateProfile)
ProfileRouter.delete("/:ProfileName",deleteProfiles)
ProfileRouter.put("/:ProfileName",updateProfile)
ProfileRouter.get("/:ProfileName",getProfileByName)

export default ProfileRouter