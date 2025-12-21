/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./users.entity";
import { OrderEntity } from "src/orders/entities/order.entity";

@Entity('customers')
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    fullName: string;

    @Column({ type: 'varchar', length: 200 })
    address: string;

    @OneToOne(() => UserEntity, user => user.customer, { cascade: true, nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @OneToMany(() => OrderEntity, orders => orders.customer)
    orders: OrderEntity[];

}