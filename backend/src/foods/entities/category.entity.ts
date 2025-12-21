/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FoodEntity } from "./food.entity";

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    category: string;

    @OneToMany(() => FoodEntity, foods => foods.category)
    foods: FoodEntity[];
}