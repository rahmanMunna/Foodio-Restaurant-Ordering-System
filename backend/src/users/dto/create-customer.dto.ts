/* eslint-disable prettier/prettier */

import { UserEntity } from "../entities/users.entity";

export class CreateCustomerDTO {
    fullName: string;
    address: string;
    user: UserEntity;
}