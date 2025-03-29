// require('dotenv').config({path: './env'});
import express from "express";  // ✅ Import Express
import dotenv from "dotenv"; 
import cors from "cors";  // ✅ Import CORS
import connectDB from "./db/index.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config({
    path: './.env'
});

// console.log("MongoDB URI:", process.env.MONGODB_URI);
const app = express(); // ✅ Initialize the Express app
// middlewares
app.use(cors());          // Allow cross-origin requests
app.use(express.json());
app.use("/api/v1/users",userRoutes)

connectDB() 
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!",err)
})




/*
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    }catch(error){
        console.error("Error",error)
        throw error
    }
        
})()    */
