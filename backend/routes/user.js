const express = require('express')
const zod = require('zod')
const {User} = require('../db')
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
            fullname: fullname
        }, JWT_SECRET)
        
        const userId = newUser._id
    
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

module.exports = UserRoute