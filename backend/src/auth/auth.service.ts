/* eslint-disable prettier/prettier */

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/services/user.service";
import { LoginDTO } from "./dto/login.dto";
import { CustomerService } from "src/users/services/customer.service";
import { AuthPayload } from "./dto/auth-payload.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
        private customerService: CustomerService
    ) { }

    async signIn(
        u: LoginDTO
    ): Promise<AuthPayload> {
        const user = await this.usersService.findUserByEmail(u.email);
        if (!user) throw new UnauthorizedException();

        // const isMatch = await bcrypt.compare(pass, user.password);
        const isMatch = user.password === u.password;
        if (!isMatch) {
            throw new UnauthorizedException();
        }
        const customer = await this.customerService.findCustomerByUserId(user.id);

        const payload = { sub: user.id, email: user.email, role: user.role };

        const token = await this.jwtService.signAsync(payload);

        return {
            access_token: token,
            userId: user.id,
            customerId: customer.id,
            email: user.email,
            role: user.role
        };
    }
}