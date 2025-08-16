import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from './dto/create-product.dto';
import Product from './schemas/product.schema';
import { updateProductDto } from './dto/update-product-dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create-product')
  createProduct(@Body() productData: createProductDto) {
    const newProductId = this.productService.createProduct(productData);

    return newProductId;
  }

  @Post('update-product/:id')
  updateProduct(
    @Param('id') productId: string,
    @Body() updateProductdata: updateProductDto,
  ) {
    const updateData = this.productService.updateProduct(
      productId,
      updateProductdata,
    );

    return updateData;
  }

  @Delete('delete-product/:id')
  deleteProduct(@Param("id") productId:string) {


 const deleteData = this.productService.deleteProduct(productId)

 return deleteData




  }

  @Get('getall-Product')
  getAllProduct() {




      const  data =this.productService.getAllProduct();

      return data





  }

  @Get('by-id/:id')
  getProductById(@Param("id") productId:string) {



    const data =  this.productService.getProductById(productId)
    return data 

  }
}
