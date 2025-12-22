/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/users.entity";
import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomerEntity } from "../entities/customer.entity";


@Injectable()
export class CustomerService {

    constructor(@InjectRepository(CustomerEntity) private customerRepo: Repository<CustomerEntity>) { }


    async findCustomerByUserId(uId: number): Promise<CustomerEntity> {
        const customer = await this.customerRepo.findOne({
            where: {
                user: {
                    id: uId
                }
            }
        });
        if (!customer) {
            throw new NotFoundException("Customer Not Found");
        }
        return customer;
    }

}