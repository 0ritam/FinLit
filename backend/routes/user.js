const express = require('express')
const zod = require('zod')
const { User, Module } = require('../db'); 
const jwt = require('jsonwebtoken')
const authMiddlewar = require('../middleware')


require('dotenv').config()
const JWT_SECRET = process.env.JSON_WEB_TOKEN_SECRET

const UserRoute  = express.Router();

UserRoute.get("/", (req, res)=> {
    res.json("On /v1/user")
})

const userZodVerify  = zod.object({
    fullname: zod.string().min(3),
    email: zod.string(),
    password: zod.string().min(3)
})

UserRoute.post("/signup", async (req, res)=>{
    const verifyZod = userZodVerify.safeParse(req.body)
    if(!verifyZod.success){
        res.status(404).json({
            msg:"Zod cannot verify the data"
        })
        return;
    }
    const findUser = await User.findOne({
        fullname: req.body.fullname
    })
    if(findUser != null){
        res.status(411).json({
            msg: "User already exist"
        })
        return;
    }

    try{
        const newUser = await User.create({
            fullname: req.body.fullname,
            email:req.body.email,
            password: req.body.password,
            
        })
        const fullname = newUser.fullname
        const token = jwt.sign({
            fullname: fullname,
            userId : newUser._id
        }, JWT_SECRET)
        
        
    
        res.status(200).json({
            msg: "New User created",
            token:token
        })
    } catch(err){
        res.status(411).json({
            msg:err.message
        })
        return;
    }
    
})

const signinZod = zod.object({
    email: zod.string(),
    password: zod.string().min(3)
})

UserRoute.post("/signin", async (req, res)=>{
    const zodSignin = signinZod.safeParse(req.body)
    if(!zodSignin.success){
        res.status(411).json({
            msg:"Error while login (zod error)"
        })
        return;
    }
    const FindUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(FindUser != null) {
        const email = FindUser.email
        const id = FindUser._id
        const token = jwt.sign({email:email,id : id}, JWT_SECRET)
        res.json({
            msg: "Succesfully logged in",
            token: token
        })
        return;
    }
    res.status(411).json({
        msg: "Error while Login"
    })
    return;
})
UserRoute.get("/attendance", async (req, res) => {
    try {
        const userId = "67987b2e58139440f4d67be1"; // Replace with dynamic user ID from auth middleware
        const todayDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

        // Fetch user details including attendance
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Check if today's date is already recorded in attendance
        const alreadyMarked = user.attendance.some(
            record => record.date.toISOString().split('T')[0] === todayDate
        );

        if (!alreadyMarked) {
            // Mark today as presented
            user.attendance.push({ date: new Date(), status: "presented" });
            await user.save();
        }

        // Fetch module progress
        const modules = await Module.find({ "progress.userId": userId });

        // Format the progress response
        const moduleProgress = modules.map((module) => {
            const userProgress = module.progress.find((p) => p.userId.toString() === userId);
            return {
                module: module.name,
                progress: userProgress ? userProgress.progressPercentage : 0, // Default 0 if no progress found
            };
        });

        res.status(200).json({
            msg: "User attendance and details fetched successfully",
            fullname: user.fullname,
            attendance: user.attendance,
            progress: moduleProgress
        });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching user details", error: error.message });
    }
});


module.exports = UserRoute