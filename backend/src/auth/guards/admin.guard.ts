/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { AuthPayload } from "../dto/auth-payload.dto";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        console.log(token);

        if (!token) {
            throw new UnauthorizedException("Token nei");
        }
        try {
            const payload: AuthPayload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: process.env.JWT_SECRET || 'secretkey'
                }
            );
            request['user'] = payload;
            if (payload?.role !== 'admin') {
                throw new UnauthorizedException("customer access only !!")
            }
        } catch {
            throw new UnauthorizedException("Invalid login unauthorized");
        }
        return true;
    }


    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}