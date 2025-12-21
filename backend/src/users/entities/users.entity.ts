/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    password: string;

    @OneToOne(() => CustomerEntity, customer => customer.user)
    customer: CustomerEntity;
}