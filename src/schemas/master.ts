import { z } from "zod";

const numberOrString = z.union([z.number(), z.string()]);

export const createMasterSchema = z.object({
  latitude: numberOrString,
  longitude: numberOrString,
  velocity: numberOrString,
  fuel: numberOrString,
  temperature: numberOrString,
  rpm: numberOrString,
  tpms_fr: z.union([z.boolean(), z.string()]),
  tpms_fl: z.union([z.boolean(), z.string()]),
  tpms_br: z.union([z.boolean(), z.string()]),
  tpms_bl: z.union([z.boolean(), z.string()]),
  press_tire_bl: numberOrString,
  press_tire_br: numberOrString,
  press_tire_fl: numberOrString,
  press_tire_fr: numberOrString,
  temp_tire_bl: numberOrString,
  temp_tire_br: numberOrString,
  temp_tire_fl: numberOrString,
  temp_tire_fr: numberOrString,
});

export type CreateMaster = z.infer<typeof createMasterSchema>;
