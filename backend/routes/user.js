const express = require('express')
const zod = require('zod')
const { User, Module } = require('../db'); 
const jwt = require('jsonwebtoken')
const {requireAuth,clerkClient} = require('@clerk/express')

require('dotenv').config()


const UserRoute  = express.Router();


const userZodVerify  = zod.object({
    fullname: zod.string().min(3),
    email: zod.string(),
    password: zod.string().min(3)
})



UserRoute.get("/attendance", requireAuth(), async (req, res) => {
    try {
      // User is already attached to req by the middleware
      const userId = req.auth.userId;
      const user = await clerkClient.users.getUser(userId);
      
      // Ensure attendance is initialized as an empty array if undefined
      if (!user.attendance) {
        user.attendance = [];
      }
      
      const todayDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      
      // Check if today's date is already recorded in attendance
      const alreadyMarked = user.attendance.some(
        record => record.date.toISOString().split('T')[0] === todayDate
      );
      
      if (!alreadyMarked) {
        // Mark today as presented
        user.attendance.push({ date: new Date(), status: "presented" });
        
        // Update the user's attendance on Clerk
        await clerkClient.users.updateUser(userId, { attendance: user.attendance });
      }
      
      // Fetch module progress using string comparison for userId
      const modules = await Module.find({ "progress.userId": userId }); // Assume userId is a string here.
      
      // Format the progress response
      const moduleProgress = modules.map((module) => {
        const userProgress = module.progress.find((p) => p.userId === userId); // String comparison
        return {
          module: module.name,
          progress: userProgress ? userProgress.progressPercentage : 0, // Default 0 if no progress found
        };
      });
      
      res.status(200).json({
        msg: "User attendance and details fetched successfully",
        fullname: user.fullName,
        attendance: user.attendance,
        progress: moduleProgress
      });
    } catch (error) {
      console.error("Error in attendance route:", error);
      res.status(500).json({ msg: "Error fetching user details", error: error.message });
    }
});


  

module.exports = UserRoute