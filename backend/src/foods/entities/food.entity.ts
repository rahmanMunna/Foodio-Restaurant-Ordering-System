/* eslint-disable prettier/prettier */

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { OrderDetailsEntity } from "src/orders/entities/order-details.entity";


@Entity('foods')
export class FoodEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'float' })
    price: number;

    @Column({ type: 'boolean' })
    isAvailable: boolean;

    @Column({ type: 'varchar', length: 200 })
    description: string;

    @ManyToOne(() => CategoryEntity, category => category.foods, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;

    @OneToMany(() => OrderDetailsEntity, orderDetails => orderDetails.food)
    orderDetails: OrderDetailsEntity[];

}