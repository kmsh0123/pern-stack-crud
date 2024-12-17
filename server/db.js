import * as schema from "../server/schema.js"; 
import { drizzle } from "drizzle-orm/neon-http"; 
import { sql } from "./index.js";

export const db = drizzle(sql, { schema, logger: true });
