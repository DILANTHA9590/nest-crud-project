import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";





@Schema()


export default class Product{
    @Prop({required:true})
    productId : string;


    @Prop({ required: true })
    name :string



    @Prop({ required: true })

    price: number


    @Prop({ required: true })

    sellingPrice: number


    @Prop({ required: true })
    rating: string


    @Prop({ required: true })
    available : boolean


}

 export const ProductSchema = SchemaFactory.createForClass(Product)