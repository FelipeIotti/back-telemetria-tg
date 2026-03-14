import { z } from "zod";

export const listQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export const createGpsSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  velocity: z.number(),
});

export type CreateGps = z.infer<typeof createGpsSchema>;
