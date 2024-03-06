import express, { json } from "express";
const {ConnectMongoDb,mongoDBURL}= require("./config/db.config");
require('dotenv').config();
import cors from 'cors';
import { RegisterRoutes } from "./build/routes";

// const PORT = process.env.PORT;

const app = express();
const PORT = 8000;
const URL = process.env.URL;
// Connection
ConnectMongoDb(URL)
.then(()=>{
    console.log(URL);
    console.log("MongoDb Connected!!");
})

//middleware
app.use(express.json());

//Middleware for handling CORS POLICY
//option1: Allow all Origins with default of cors(*) 
// app.use(cors());
//option2: Allow Custom Origins
// app.use(
//     cors({
//         origin:'http://localhost:8000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )


//Routes
// app.get('/',(req,res)=>{
//     // console.log(req);
//     return res.status(201).end("Book Store Project");
// })

// app.use(json());
RegisterRoutes(app);

app.listen(PORT,()=>{
    console.log("Server Started !!");
})

