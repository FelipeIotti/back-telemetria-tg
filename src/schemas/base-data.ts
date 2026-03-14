import { z } from "zod";

export const createBaseDataSchema = z.object({
  velocity: z.number(),
  fuel: z.string(),
  temperature: z.number(),
  rpm: z.number(),
});

export const listQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export type CreateBaseData = z.infer<typeof createBaseDataSchema>;
