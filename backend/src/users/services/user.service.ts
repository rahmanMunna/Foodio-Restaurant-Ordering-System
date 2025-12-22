/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/users.entity";
import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomerEntity } from "../entities/customer.entity";


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>) { }

    async findUserByEmail(userEmail: string): Promise<UserEntity> {
        const user = await this.userRepo.findOne({
            where: {
                email: userEmail
            }
        });
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user;
    }
    // async findCustomerByUserId(uId:number):Promise<>{
    //     const customer = await this.user
    // }

}