import { Module, OnModuleInit } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Module({})
export class DatabaseModule implements OnModuleInit {
  async onModuleInit() {
    const mongoUrl = process.env.MONGODB_URL;
    mongoose
      .connect(mongoUrl!)
      .then(() => console.log('✅ Database connected successfully'))
      .catch((err) => console.error('❌ DB connection failed', err));
  }
}
