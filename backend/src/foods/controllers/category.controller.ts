/* eslint-disable prettier/prettier */

import { Controller, Get } from "@nestjs/common";
import { CategoryService } from "../services/category.service";
import { CategoryEntity } from "../entities/category.entity";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get('all')
    async getAllCategory(): Promise<CategoryEntity[]> {
        return await this.categoryService.getAllCategory()
    }
}