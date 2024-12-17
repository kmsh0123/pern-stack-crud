import {defineConfig} from "drizzle-kit"
import * as dotenv from "dotenv"

dotenv.config({
    path : ".env"
})
export default defineConfig({
    schema : "./server/schema.js",
    out : "./server/migrations",
    dialect : "postgresql",
    dbCredentials : {
        url : process.env.DATABASE_URL
    }
})