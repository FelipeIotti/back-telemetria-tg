import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type Auth = z.infer<typeof authSchema>;
