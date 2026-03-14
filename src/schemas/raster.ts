import { z } from "zod";

export const listQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export const createRasterSchema = z.object({
  velocity: z.boolean(),
  temperature: z.boolean(),
  fuel: z.boolean(),
  rpm: z.boolean(),
  tpms_fr: z.boolean(),
  tpms_fl: z.boolean(),
  tpms_br: z.boolean(),
  tpms_bl: z.boolean(),
});

export type CreateRaster = z.infer<typeof createRasterSchema>;
