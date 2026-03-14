import { z } from "zod";

export const createMasterSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  velocity: z.number(),
  fuel: z.string(),
  temperature: z.number(),
  rpm: z.number(),
  tpms_fr: z.boolean(),
  tpms_fl: z.boolean(),
  tpms_br: z.boolean(),
  tpms_bl: z.boolean(),
  press_tire_bl: z.number(),
  press_tire_br: z.number(),
  press_tire_fl: z.number(),
  press_tire_fr: z.number(),
  temp_tire_bl: z.number(),
  temp_tire_br: z.number(),
  temp_tire_fl: z.number(),
  temp_tire_fr: z.number(),
});

export type CreateMaster = z.infer<typeof createMasterSchema>;
