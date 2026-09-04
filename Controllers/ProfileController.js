import Profile from "../Models/Profile.js";
import { isAdmin } from "./UserController.js";

export async function CreateProfile(req, res) {
  if (!isAdmin(req)) {
    return res.status(403).json({
      message: "Access Denied. Admins Only.",
    });
  }

  try {
    const { ProfileName, altNames, Temp, Plant, image, drawing, isAvailable } = req.body;

    if (!ProfileName) {
      return res.status(400).json({
        message: "Profile Name is required",
      });
    }

    const existingProfile = await Profile.findOne({ ProfileName });

    if (existingProfile) {
      return res.status(400).json({
        message: "Profile already exists",
      });
    }

    const newProfile = new Profile({
      ProfileName,
      altNames,
      Temp,
      Plant,
      image,
      drawing,
      isAvailable: isAvailable ?? true,
    });

    await newProfile.save();
    return res.status(201).json({
      message: "Profile created successfully",
    });
  } catch (error) {
    console.error("Create Profile Error:", error);
    return res.status(500).json({
      message: "Error creating profile",
      error: error.message,
    });
  }
}

export async function getAllProfiles(req, res) {
  try {
    if (isAdmin(req)) {
      const profiles = await Profile.find();
      return res.json(profiles);
    } else {
      const profiles = await Profile.find({ isAvailable: true });
      return res.json(profiles);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching profiles",
    });
  }
}

export async function deleteProfiles(req, res) {
  if (!isAdmin(req)) {
    return res.status(403).json({
      message: "Access denied. Admins only.",
    });
  }

  try {
    await Profile.deleteOne({
      ProfileName: req.params.ProfileName,
    });
    return res.json({
      message: "Profile deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting profile",
    });
  }
}

export async function updateProfile(req, res) {
  if (!isAdmin(req)) {
    return res.status(403).json({
      message: "Access denied. Admins only.",
    });
  }

  try {
    await Profile.updateOne(
      { ProfileName: req.params.ProfileName },
      {
        Temp: req.body.Temp,
        Alloy: req.body.Alloy,
        Plant: req.body.Plant,
        image: req.body.image,
        drawing: req.body.drawing,
        isAvailable: req.body.isAvailable,
      }
    );

    return res.json({
      message: "Profile updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating profile",
    });
  }
}

export async function getProfileByName(req, res) {
  try {
    const profile = await Profile.findOne({
      ProfileName: req.params.ProfileName,
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    if (isAdmin(req)) {
      return res.json(profile);
    } else {
      return res.status(403).json({
        message: "Access denied. Admins only",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching profile",
    });
  }
}