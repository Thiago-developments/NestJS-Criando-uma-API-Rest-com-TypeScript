import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config/dist/config.module'
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      //process.env.USERNAME
      password: 'admin',
      //process.env.PASSWORD
      database: 'products',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Product])
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
