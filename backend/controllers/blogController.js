import mongoose from "mongoose";
import Blog from '../models/blogModel.js'


const getBlogs = async(req,res) => {
    const blogs = await Blog.find({}).sort({
        createdAt:-1
    })
    res.status(200).json(blogs)
}

const getBlog = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error:"Doesn't exist"})
    }
    const blog = await Blog.findById({_id:id})
    if(!blog){
        res.status(400).json({error:"error.message"})
    }
    console.log(blog)
    res.status(200).json(blog)
}

const createBlog = async(req,res) => {
    const {title,body,author} = req.body
    const emptyField = []
    if(!title){
        emptyField.push("title")
    }
    if(!body){
        emptyField.push("title")
    }
    if(!author){
        emptyField.push("title")
    }
    if(emptyField.length>0){
        res.status(400).json({error:"You must fill in all fields"})
    }
    try{
        const blog = await Blog.create({title,body,author})
        res.status(200).json(blog);
    }
    catch(error){
        res.status(401).json({error:error.message})
    }
}

const deletePost = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error:"Post doesn't exist"})
    }
    const blog = await Blog.findByIdAndDelete({_id:id})
    if(!blog){
        res.status(400).json({error:"Failed to delete"})
    }
    res.status(200).json(blog)
}


export {getBlogs,createBlog,getBlog,deletePost}