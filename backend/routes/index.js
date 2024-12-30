import express from 'express';



const router = express.Router();


router.get("/", (req, res)=>{
    res.json("On /api/v1")
})



export default router