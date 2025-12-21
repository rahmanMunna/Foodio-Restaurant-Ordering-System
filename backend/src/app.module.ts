/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from './foods/food.module';
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';

@Module({
  imports: [FoodModule, UserModule, OrderModule,
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
