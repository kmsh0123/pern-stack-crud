import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config({
    path : ".env"
})

const app = express();
const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors())

//Route
app.use("/api",blogRoutes)

app.listen(port,()=>(
    console.log(`Server on port ${port}`)
))