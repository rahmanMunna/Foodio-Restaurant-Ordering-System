/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { FoodService } from "../services/food.service";
import { CreateFoodDTO } from "../dto/create-food.dto";
import { FoodResponseDTO } from "../dto/food-response.dto";
import { CreateCategoryDTO } from "../dto/create-category.dto";
import { CategoryEntity } from "../entities/category.entity";
import { FoodEntity } from "../entities/food.entity";

@Controller('food')
export class FoodController {

    constructor(private readonly foodService: FoodService) { }

    @Post('create')
    async create(@Body() dto: CreateFoodDTO): Promise<{ message: string; data: FoodResponseDTO }> {
        const food = await this.foodService.createFood(dto);
        return {
            message: 'Food created successfully',
            data: food,
        };
    }

    @Post('category/create')
    async createCategory(@Body() dto: CreateCategoryDTO): Promise<CategoryEntity> {
        return this.foodService.createCategory(dto);
    }

    @Get('all')
    async getAllFood(): Promise<FoodEntity[]> {
        return await this.foodService.getAllFood();
    }

    @Get('category/:cId')
    async getAllFoodByCategory(@Param('cId', ParseIntPipe) cId: number): Promise<FoodEntity[]> {
        return this.foodService.getAllFoodByCategory(cId);
    }
}