/* eslint-disable prettier/prettier */

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/services/user.service";
import { LoginDTO } from "./dto/login.dto";
import { CustomerService } from "src/users/services/customer.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
        private customerService: CustomerService
    ) { }

    async signIn(u: LoginDTO): Promise<any> {
        const user = await this.usersService.findUserByEmail(u.email);
        if (!user) throw new UnauthorizedException();

        const isMatch = user.password === u.password;
        if (!isMatch) {
            throw new UnauthorizedException();
        }

        let role = 'admin';
        if (user.role === 'customer') {
            role = 'customer'
        }


        const payload = { sub: user.id, role };

        const token = await this.jwtService.signAsync(payload);

        return token;

        
    }

    async user(cookie) : Promise<any> {
        const data = this.jwtService.verifyAsync(cookie);
        return data;
    }
}