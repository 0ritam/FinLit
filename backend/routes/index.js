const express = require('express');
const UserRoute = require('./user');
const moduleRoute = require('./module');
const contentRoute  = require('./content')

const router = express.Router();

router.get("/", (req, res)=>{
    res.json("On /v1")
})

router.use('/user', UserRoute)
router.use('/module',moduleRoute)
router.use('/:moduleId/content',contentRoute)

module.exports = router