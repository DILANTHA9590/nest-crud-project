import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ equired: true })
  fistName: string;

  @Prop({ equired: true })
  lastName: string;

  @Prop({ equired: true })
  email: string;

  @Prop({ equired: true })
  password: string;

  @Prop({ equired: true })
  type: string;
  @Prop({ default: Date.now })
  date_addedd: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
