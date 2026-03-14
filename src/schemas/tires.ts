import { z } from "zod";

export const listQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export const createTiresSchema = z.object({
  press_tire_bl: z.number(),
  press_tire_br: z.number(),
  press_tire_fl: z.number(),
  press_tire_fr: z.number(),
  temp_tire_bl: z.number(),
  temp_tire_br: z.number(),
  temp_tire_fl: z.number(),
  temp_tire_fr: z.number(),
});

export type CreateTires = z.infer<typeof createTiresSchema>;
