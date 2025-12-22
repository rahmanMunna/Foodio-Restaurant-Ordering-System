/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
// import { UserService } from "src/users/services/user.service";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '3600s' }
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule { }