import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.COR_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ententec: true,limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//route declaration
app.use("/api/v1/users", userRouter)

// http://localhost:800/api/v1/users/register


export {app} 