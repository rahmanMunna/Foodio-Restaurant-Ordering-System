/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { OrderEntity } from "../entities/order.entity";
import { In, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDetailsEntity } from "../entities/order-details.entity";
import { OrderItemDTO, PlaceOrderDTO } from "../dto/create-order.dto";
import { CustomerEntity } from "src/users/entities/customer.entity";
import { FoodEntity } from "src/foods/entities/food.entity";
import { OrderStatusEntity } from "../entities/order-status.entity";
import { JwtService } from "@nestjs/jwt";

export interface JwtPayload {
    sub: number;
    role: 'admin' | 'customer';
    iat: number;
    exp: number;
}

@Injectable()
export class OrderService {
    constructor(
        private jwtService: JwtService,
        @InjectRepository(OrderEntity) private readonly orderRepo: Repository<OrderEntity>,
        @InjectRepository(CustomerEntity) private readonly customerRepo: Repository<CustomerEntity>,
        @InjectRepository(FoodEntity) private readonly foodRepo: Repository<FoodEntity>,
        @InjectRepository(OrderStatusEntity) private readonly orderStatusRepo: Repository<OrderStatusEntity>,
        @InjectRepository(OrderDetailsEntity) private readonly orderDetailsRepo: Repository<OrderDetailsEntity>) { }


    async getOrderById(oId: number): Promise<OrderEntity> {
        const order: OrderEntity | null = await this.orderRepo.findOneBy({ id: oId });
        if (!order) {
            throw new NotFoundException(`${oId} is not existing order`);
        }
        return order;
    }
    async placeOrder(dto: PlaceOrderDTO): Promise<OrderEntity> {
        const customer: CustomerEntity = await this.getCustomerById(dto.customerId);
        const orderedFoods: FoodEntity[] = await this.getAllFoodById(dto.orderItems);

        const foodTotal: number = this.calculateFoodTotal(dto.orderItems, orderedFoods);

        const orderPlaced = this.orderRepo.create({
            date: new Date(),
            foodTotal: foodTotal,
            deliveryCharge: 80,
            total: foodTotal + 80,
            customer: customer,
            orderStatus: {
                id: 1,
                status: "pending"
            }
        })
        const orderCreated = await this.orderRepo.save(orderPlaced);
        await this.createOrderDetails(orderCreated, dto.orderItems, orderedFoods);
        return orderCreated;
    }
    async getCustomerById(cId: number): Promise<CustomerEntity> {
        const customer: CustomerEntity | null = await this.customerRepo.findOneBy({ id: cId });
        if (!customer) {
            throw new NotFoundException('customer not found');
        }
        return customer;
    }
    async getAllFoodById(orderItems: OrderItemDTO[]): Promise<FoodEntity[]> {

        const foodIds: number[] = orderItems.map(item => item.foodId);

        const foods: FoodEntity[] = await this.foodRepo.find({
            where: {
                id: In(foodIds)
            }
        })
        return foods;
    }
    calculateFoodTotal(orderItems: OrderItemDTO[], foods: FoodEntity[]): number {
        let total = 0;
        for (const oi of orderItems) {

            const f: FoodEntity | undefined = foods.find(f => f.id === oi.foodId);

            if (!f) {
                throw new NotFoundException(`Food with id ${oi.foodId} not found`);
            }
            total = total + f.price * oi.qty;
        }
        return total;
    }
    // Order details
    async createOrderDetails(order: OrderEntity, orderItems: OrderItemDTO[], foods: FoodEntity[]): Promise<OrderDetailsEntity[]> {
        const orderDetails: OrderDetailsEntity[] = [];
        for (const oi of orderItems) {
            const f: FoodEntity | undefined = foods.find(f => f.id === oi.foodId);
            if (!f) {
                throw new NotFoundException(`Food with id ${oi.foodId} not found`);
            }

            const detail = this.orderDetailsRepo.create({
                order,
                orderPrice: f.price,
                qty: oi.qty,
                food: f
            });
            orderDetails.push(detail);
        }
        return await this.orderDetailsRepo.save(orderDetails);
    }
    // 
    async getOrderByCustomerId(cId: number): Promise<OrderEntity[]> {
        const order: OrderEntity[] | null = await this.orderRepo.find({
            where: {
                customer: {
                    id: cId,
                }
            },
            relations:
                [
                    'orderStatus',
                    'customer',
                    'orderDetails',
                    'orderDetails.food'
                ],
            order: {
                date: 'DESC'
            }


        })
        if (!order) {
            throw new NotFoundException(`No orders found for customer ${cId}`);
        }
        return order;
    }

    // change order status
    async getOrderStatusById(id: number): Promise<OrderStatusEntity> {
        const ors = await this.orderStatusRepo.findOneBy({ id: id })
        if (!ors) {
            throw new NotFoundException(`${id} is not existing order`);
        }
        return ors;
    }
    async prepareOrder(oId: number): Promise<boolean> {
        const order: OrderEntity | null = await this.getOrderById(oId)
        const status: OrderStatusEntity = await this.getOrderStatusById(2); // 2 for preparing

        await this.orderRepo.update(
            { id: oId },
            { orderStatus: status },
        );

        return true;
    }
    async readyOrder(oId: number): Promise<boolean> {
        const order: OrderEntity | null = await this.getOrderById(oId)

        const status: OrderStatusEntity = await this.getOrderStatusById(3); // 2 for ready

        await this.orderRepo.update(
            { id: oId },
            { orderStatus: status },
        );

        return true;
    }
    async completeOrder(oId: number): Promise<boolean> {
        const order: OrderEntity | null = await this.getOrderById(oId)
        const status: OrderStatusEntity = await this.getOrderStatusById(4); // 2 for ready

        await this.orderRepo.update(
            { id: oId },
            { orderStatus: status },
        );

        return true;
    }

    // admin
    async getAllOrders(): Promise<OrderEntity[]> {
        return await this.orderRepo.find({
            relations: ['orderStatus', 'customer']
        });
    }

    async getAllOrderStatus(): Promise<OrderStatusEntity[]> {
        return await this.orderStatusRepo.find();
    }
    async user(cookie: string): Promise<number> {
        // Decode JWT
        const data: JwtPayload = await this.jwtService.verifyAsync(cookie);

        // Find customer by user ID
        const customer = await this.customerRepo.findOne({
            where: {
                user: { id: data.sub },
            },
            select: {
                id: true,
            },
        });

        if (!customer) {
            throw new Error('Customer not found');
        }

        return customer.id;
    }

}