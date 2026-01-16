/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './foods/food.module';
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [FoodModule, UserModule, OrderModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3600s' }
    }),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '5850',
        database: 'foodio',
        autoLoadEntities: true,
        synchronize: true
      }
    )],
  controllers: [],
  providers: [],
})
export class AppModule { }
