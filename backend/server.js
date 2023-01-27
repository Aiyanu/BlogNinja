import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import blogRoutes from "./Routes/blogRoutes.js"


//App Config
const app = express();
const port = 8000 || process.env.PORT
dotenv.config()

//Middleware
app.use(express.json())

//DB Config
const connection_url=process.env.MONGO_URL
mongoose
    .connect(connection_url,{
        useNewUrlParser:true
    })
    .then(()=>{
        console.log("Database connected successfully")
        app.listen(port,()=>console.log(`Server is running on port ${port}`))
    })
mongoose.Promise=global.Promise

//Routes
app.use("/api/blog",blogRoutes)

