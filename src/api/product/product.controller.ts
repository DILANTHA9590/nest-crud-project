import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}




@Post("create-product")
createProduct(@Body() productData){




  const newProductId  = this.productService.createProduct(productData)

return newProductId



}



@Post("update-product/:id")
updateProduct(){

  

}



@Delete("delete-product/:id")
deleteProduct(){
  

}


@Get("getall-Product")
getAllProduct(){

}






@Get("by-id/:id")
getProductById(){

}



















}
