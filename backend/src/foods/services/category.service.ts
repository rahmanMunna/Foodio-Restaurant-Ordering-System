/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../entities/category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) private readonly categoryRepo: Repository<CategoryEntity>) { }

    async getAllCategory(): Promise<CategoryEntity[]> {
        return await this.categoryRepo.find();
    }
}