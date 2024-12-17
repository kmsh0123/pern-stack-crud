import { eq } from "drizzle-orm";
import { db } from "../server/db.js";
import { blogPosts } from "../server/schema.js";

export const readBlogs = async (req,res) => {
   try {
    const getPosts = await db.query.blogPosts.findMany();

    if (getPosts.length === 0) {
        return res.status(404).json({
          status: false,
          message: "Data Not Found",
        });
      }
    
   res.status(200).json({
    status : true,
    message : `Get All Blogs`,
    getPosts
})
   } catch (error) {
    res.status(500).json({
        status : false,
        message : error.message
    })
   }
}

export const readBlogsById = async (req,res) => {
    const {id} = req.params
    try {
     const getPost = await db.query.blogPosts.findFirst({where : eq(blogPosts.id,id)});
     if(!getPost){
        res.status(404).json({
            status : false,
            message : "ID not found"
        })
     }else{
        res.status(200).json({
            status : true,
            message : `Get Blogs Detail`,
            getPost
        })
     }
    } catch (error) {
     res.status(500).json({
         status : false,
         message : error.message
     })
    }
}

export const createBlogs = async (req,res) => {
    const { title, description} = req.body;
    try {
        const result = await db.insert(blogPosts).values({ title, description }).returning();
        res.status(201).json({
            status : true,
            message : "Create Blog Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({
            status : false,
            message : error.message
        })
    }
}

export const UpdateBlogs = async (req,res) => {
    const {id} = req.params
    try {
    const { title, description} = req.body;
    const updateBlog = await db.update(blogPosts).set({
        title,
        description
    }).where(eq(blogPosts.id,id)).returning();

    if (updateBlog.length === 0) {
        return res.status(404).json({
          status: false,
          message: "Data Not Found",
        });
      }
    
    res.status(200).json({
        status : true,
        message : "Update Blog Successfully",
        updateBlog
    });

    } catch (error) {
        res.status(500).json({
            status : false,
            message : error.message
        })
    }
}

export const DeleteBlogs = async (req,res) => {
    const {id} = req.params;

    try {
     const deletePosts = await db.delete(blogPosts).where(eq(blogPosts.id,id)).returning();

      if (deletePosts.length === 0) {
        return res.status(404).json({
          status: false,
          message: "Blog ID Not Found",
        });
      }
        res.status(200).json({
            status : true,
            message : `Delete Post Successfully`
        })
     
    } catch (error) {
        res.status(500).json({
            status : false,
            message : error.message
        })
    }
}