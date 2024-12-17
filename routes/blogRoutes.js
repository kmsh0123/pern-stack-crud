import {Router} from "express";
import { createBlogs, DeleteBlogs, readBlogs, readBlogsById, UpdateBlogs } from "../controller/blogController.js";

const router = Router();

router.get("/get",readBlogs)

router.get("/get/:id",readBlogsById)

router.post("/create",createBlogs)

router.put("/update/:id",UpdateBlogs)

router.delete("/delete/:id",DeleteBlogs)

export default router