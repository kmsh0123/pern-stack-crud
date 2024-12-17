import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const blogPosts = pgTable("blogPosts",{
    id : serial("id").primaryKey(),
    title : text("title").notNull(),
    description : text("description").notNull()
})