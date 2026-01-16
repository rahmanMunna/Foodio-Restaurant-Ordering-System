/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "../auth.service";

export interface JwtPayload {
    sub: number;
    role: 'admin' | 'customer';
    iat: number;
    exp: number;
}

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();

        const token = request.cookies['jwt'];
        console.log(token)
        if (!token) {
            throw new UnauthorizedException('No JWT token found');
        }

        try {
            const data: JwtPayload = await this.authService.user(token);

            if (data.role === 'admin') {
                return true; // allow access
            } else {
                throw new UnauthorizedException('Not an admin');
            }
        } catch (err) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
