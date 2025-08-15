// app.module.ts
import { Module } from '@nestjs/common';
import { ProductModule } from './api/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env load වෙන්න
    MongooseModule.forRoot(process.env.MONGODB_URL!), // env variable use
    ProductModule,
  ],
})
export class AppModule {}
