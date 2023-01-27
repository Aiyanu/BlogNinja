import { Router } from "express";
import { createBlog, deletePost, getBlog, getBlogs } from "../controllers/blogController.js";

const router = Router()

//Get all blog posts
router.get("/",getBlogs);

// //Get one blog post
router.get("/:id",getBlog);

// //Create a blog post
router.post("/create",createBlog);

// //Delete a blog post
router.delete("/:id",deletePost)

// //Not found
// router.get('*')

export default router