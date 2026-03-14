import { Knex, knex as setupKnex } from "knex";
import { env } from "./env";

// Para Supabase: use o Connection Pooler (porta 6543) na DATABASE_URL para evitar
// "Timeout acquiring a connection". No dashboard: Settings → Database → Connection string → "Use connection pooling".
const connection: Knex.Config["connection"] =
  env.DATABASE_CLIENT === "sqlite"
    ? { filename: env.DATABASE_URL }
    : {
        connectionString: env.DATABASE_URL,
        connectionTimeoutMillis: 10000,
      };

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection,
  useNullAsDefault: true,
  ...(env.DATABASE_CLIENT === "pg" && {
    pool: {
      min: 2,
      max: 10,
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
    },
  }),
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
