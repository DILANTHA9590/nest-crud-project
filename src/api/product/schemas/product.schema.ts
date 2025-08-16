import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export default class Product {
  @Prop({ required: true, unique: true })
  productId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  sellingPrice: number;

  @Prop({ required: true })
  rating: string;

  @Prop({ required: true })
  available: boolean;

  @Prop(
    raw([
      {
        medicine: { type: String, required: true },
        dosage: { type: String, required: true },
        duration: { type: String, required: true },
        instructions: { type: String },
        notes: { type: String },
      },
    ]),
  )
  prescription: Record<string, any>[];

  @Prop({ default: Date.now })
  date_addedd: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
