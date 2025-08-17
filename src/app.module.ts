// app.module.ts
import { Module } from '@nestjs/common';
import { ProductModule } from './api/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env load වෙන්න
    MongooseModule.forRoot(process.env.MONGODB_URL!), // env variable use
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
