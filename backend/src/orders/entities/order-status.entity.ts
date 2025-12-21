/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity('orders_status')
export class OrderStatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @OneToMany(() => OrderEntity, orders => orders.orderStatus)
    orders: OrderEntity[]
}