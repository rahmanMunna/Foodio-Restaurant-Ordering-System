/* eslint-disable prettier/prettier */

import { CustomerEntity } from "src/users/entities/customer.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatusEntity } from "./order-status.entity";
import { OrderDetailsEntity } from "./order-details.entity";

@Entity('orders')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column({ type: 'float' })
    total: number;

    @Column({ type: 'float' })
    foodTotal: number;

    @Column({ type: 'float' })
    deliveryCharge: number;

    @Column({ type: 'timestamp', nullable: true })
    deliveredAt: Date;

    @ManyToOne(() => CustomerEntity, customer => customer.orders, { nullable: false })
    @JoinColumn({ name: 'customer_id' })
    customer: CustomerEntity;

    @ManyToOne(() => OrderStatusEntity, orderStatus => orderStatus.orders)
    @JoinColumn({ name: 'order_status_id' })
    orderStatus: OrderStatusEntity;

    @OneToMany(() => OrderDetailsEntity, orderDetails => orderDetails.order)
    orderDetails: OrderDetailsEntity[];
}