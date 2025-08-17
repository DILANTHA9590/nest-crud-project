import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Product from './schemas/product.schema';
import mongoose, { Model } from 'mongoose';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product-dto';
import { ProductModule } from './product.module';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(productData: createProductDto) {
    try {
      // 1️⃣ Check if productId exists
      const isHave = await this.productModel.findOne({
        productId: productData.productId,
      });

      if (isHave) {
        throw new ConflictException('Product id already exists');
      }

      // 2️⃣ Auto-increment productId
      const productCount = await this.productModel.countDocuments();
      productData.productId = (productCount + 1).toString(); // convert to string if schema uses string

      // 3️⃣ Create new product
      const productCreated = await this.productModel.create(productData);

      return {
        message: 'Product created successfully',
        product: productCreated,
      };
    } catch (error) {
      console.log(error);

      // 4️⃣ Handle Mongo duplicate key
      if (error.code === 11000) {
        throw new ConflictException('Product ID already exists');
      }

      throw error;
    }
  }

  //updated product service------------------------------------------------------------>
  async updateProduct(productId: string, productData: updateProductDto) {
    try {
      const updateProduct = await this.productModel.updateOne(
        { productId: productId },
        productData,
      );

      if (updateProduct.matchedCount == 0) {
        throw new NotFoundException(
          `Product updated fail  this ${productId} not found`,
        );
      }

      return {
        message: 'Product updated Success',
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Product ID already exists');
      }

      throw error;
    }
  }

  async deleteProduct(productId: string) {
    try {
      const deleteProduct = await this.productModel.findOneAndDelete({
        productId,
      });

      if (!deleteProduct) {
        throw new NotFoundException(
          `Deleted failed , product_ID ${productId} not found`,
        );
      }

      return {
        message: `Product id ${productId} deleted success`,
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Product ID already exists');
      }

      throw error;
    }
  }

  async getAllProduct() {
    try {
      const getAllProduct = await this.productModel.find();

      return {
        message: 'All products',
        product: getAllProduct,
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Product ID already exists');
      }

      throw error;
    }
  }
  async getProductById(productId: string) {
    try {
      const getProduct = await this.productModel.findOne({
        productId: productId,
      });

      if (!getProduct) {
        throw new NotFoundException('no product found this id', productId);
      }

      return {
        message: 'All products',
        product: getProduct,
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Product ID already exists');
      }

      throw error;
    }
  }
}
