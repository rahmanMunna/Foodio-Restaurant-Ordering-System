/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDetailsEntity } from "../entities/order-details.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderDetailsService {
    constructor(@InjectRepository(OrderDetailsEntity) private readonly orderDetailsRepo: Repository<OrderDetailsEntity>) { }

    async getOrderDetailsByOrderId(oId: number): Promise<OrderDetailsEntity[]> {
        const orderDetails = await this.orderDetailsRepo.find({
            where: {
                order: {
                    id: oId
                }
            },
            relations:
                [
                    'food'
                ]
        })
        if (!orderDetails) {
            throw new NotFoundException(`${oId} is not found`);
        }
        return orderDetails;
    }
}