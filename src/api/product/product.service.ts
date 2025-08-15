import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Product from './schemas/product.schema';
import mongoose from 'mongoose';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name)private productModel:mongoose.Model<Product>,
    ){}



async  createProduct(productData){


   try {
     const isHave = await this.productModel.findOne({productId:productData.productId});
     console.log(isHave);


    if(isHave){
        throw new ConflictException("Product id already have")

    }


let productCount = await this.productModel.countDocuments();



productData.productId = productCount + 1

    const productdata  =  await this.productModel.create(productData)
    // const productdatas  =  await this.productModel.deleteMany()      


    return {message: "product created successfully"}    
 
    
   } catch (error) {

    console.log(error)


    if (error.code === 11000) { // duplicate key from MongoDB
      throw new ConflictException('Product ID already exists');
    }

     throw error;
   }
   
    }


















    updateProduct(){

    }



    deleteProduct(){

    }




    getAllProduct(){

    }




    getProductById(){

    }





}



