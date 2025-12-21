/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/users.entity";
import { CustomerEntity } from "./entities/customer.entity";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, CustomerEntity])],
    providers: [],
    controllers: []
})
export class UserModule { }