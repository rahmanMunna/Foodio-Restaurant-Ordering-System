/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */

import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { LoginDTO } from "./dto/login.dto";
import { AuthService } from "./auth.service";
import express from "express";
import { AuthGuard } from "./guards/auth.guard";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('signIn')
    async signIn(@Body() user: LoginDTO, @Res({ passthrough: true }) res: express.Response): Promise<any> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const token = await this.authService.signIn(user);
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: '/'
        });

        return token;
    }

    @UseGuards(AuthGuard)
    @Post('user')
    async user(@Req() req: express.Request): Promise<any> {
        const cookie = req.cookies['jwt'];
        const data = this.authService.user(cookie);
        return data;
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) res: express.Response): Promise<boolean> {
        res.clearCookie('jwt', {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            path: '/',
        });
        return true;
    }
}