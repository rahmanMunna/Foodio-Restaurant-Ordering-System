/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FoodEntity } from "../entities/food.entity";
import { Repository } from "typeorm";
import { CategoryEntity } from "../entities/category.entity";
import { CreateFoodDTO } from "../dto/create-food.dto";
import { CreateCategoryDTO } from "../dto/create-category.dto";

@Injectable()
export class FoodService {
    constructor(@InjectRepository(FoodEntity) private readonly foodRepo: Repository<FoodEntity>,
        @InjectRepository(CategoryEntity) private readonly categoryRepo: Repository<CategoryEntity>) { }

    async createCategory(dto: CreateCategoryDTO): Promise<CategoryEntity> {
        const category = this.categoryRepo.create(dto);
        return await this.categoryRepo.save(category)
    }

    async getCategoryById(cId: number): Promise<CategoryEntity> {
        const category = await this.categoryRepo.findOneBy({ id: cId })
        if (!category) {
            throw new NotFoundException('Category not found');
        }
        return category
    }

    async createFood(dto: CreateFoodDTO): Promise<FoodEntity> {
        const category = await this.getCategoryById(dto.categoryId);

        if (!category) {
            throw new NotFoundException('Category not found');
        }

        const food = this.foodRepo.create({
            name: dto.name,
            price: dto.price,
            isAvailable: dto.isAvailable,
            description: dto.description,
            category
        });

        return await this.foodRepo.save(food);
    }

    async getAllFood(): Promise<FoodEntity[]> {
        return await this.foodRepo.find({
            relations: ['category']
        });
    }

    async getAllFoodByCategory(cId: number): Promise<FoodEntity[]> {
        const category = await this.getCategoryById(cId);
        return await this.foodRepo.find({
            where: {
                category: category
            }
        });
    }
}