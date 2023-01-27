import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true})

const blog = mongoose.model("blog", blogSchema);

export default blog