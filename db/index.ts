import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = process.env.DATABASE_URL ?? "";

const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });

import * as schema from "./schema";
// todo before review: just use the exported `db` object
export * from "./schema";
