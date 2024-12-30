
import express from 'express'
import router from "./routes/index.js"
import cors from 'cors'
const PORT = process.env.PORT || 3000;
import 'dotenv/config';

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

app.get('/', (req,res)=>{
    res.json({
        msg:"Server is now Running"
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})
