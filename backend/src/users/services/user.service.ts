/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/users.entity";
import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomerEntity } from "../entities/customer.entity";
import { RegisterCustomerDTO } from "src/auth/dto/register.dto";


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
        @InjectRepository(CustomerEntity) private customerRepo: Repository<CustomerEntity>) { }

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

    async createUser(dto: RegisterCustomerDTO): Promise<CustomerEntity> {
        const user = this.userRepo.create({
            email: dto.email,
            password: dto.password,
            role: 'customer'
        });
        const u = await this.userRepo.save(user);
        const customer = this.customerRepo.create({
            fullName: dto.fullName,
            address: dto.address,
            user: u
        });
        const c = await this.customerRepo.save(customer);
        return c;
    }
    // async findCustomerByUserId(uId:number):Promise<>{
    //     const customer = await this.user
    // }

}