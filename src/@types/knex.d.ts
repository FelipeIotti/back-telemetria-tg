import "knex";
import { BaseDataDTO } from "../dtos/base-data-DTO";
import { RasterDTO } from "../dtos/raster-DTO";
import { TiresDTO } from "../dtos/tires-DTO";

declare module "knex/types/tables" {
  export interface Tables {
    base_data: BaseDataDTO;
    tires: TiresDTO;
    raster: RasterDTO;
  }
}
