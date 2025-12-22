/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FoodEntity } from "./entities/food.entity";
import { CategoryEntity } from "./entities/category.entity";
import { FoodService } from "./services/food.service";
import { FoodController } from "./controllers/food.controller";
import { CategoryController } from "./controllers/category.controller";
import { CategoryService } from "./services/category.service";

@Module({
    imports: [TypeOrmModule.forFeature([FoodEntity, CategoryEntity])],
    providers: [FoodService, CategoryService],
    controllers: [FoodController, CategoryController]
})
export class FoodModule { }