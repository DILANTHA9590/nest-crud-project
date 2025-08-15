import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Product from './schemas/product.schema';
import mongoose from 'mongoose';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name)private productModel:mongoose.Model<Product>,
    ){}



async  createProduct(productData){



    const productdata  =  await this.productModel.create(productData)




      

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



