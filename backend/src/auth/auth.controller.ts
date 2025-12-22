/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from "@nestjs/common";
import { LoginDTO } from "./dto/login.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('signIn')
    async signIn(@Body() user: LoginDTO): Promise<any> {
        return await this.authService.signIn(user);
    }
}