/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/users.entity";
import { CustomerEntity } from "./entities/customer.entity";
import { UserService } from "./services/user.service";
import { CustomerService } from "./services/customer.service";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, CustomerEntity])],
    providers: [UserService, CustomerService],
    controllers: [],
    exports: [UserService, CustomerService]
})
export class UserModule { }