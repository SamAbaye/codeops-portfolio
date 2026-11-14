import { IsBoolean, IsString, Length, IsOptional, IsIn } from "class-validator";
import type {  Area } from "../restaurants.type.js";
import { AREAS } from "../restaurants.type.js";
export class createRestaurantDto {
    @IsString() @Length(2, 80)
    name!: string;
    @IsIn(AREAS) 
    area!: Area;
    @IsBoolean() @IsOptional()
    isOpen?: boolean;
} 