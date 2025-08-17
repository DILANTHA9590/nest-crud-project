import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { createProductDto } from '../product/dto/create-product.dto';
import { find } from 'rxjs';
import { createUserDto } from './dto/create-user.dto';
import * as argon2 from "argon2";

@Injectable()
export class UserService {


    constructor(
        @InjectModel(User.name) private  userModel: Model<User>,
    ) {}



    async createUser(userData:createUserDto){

        try {

;


// get email and password using object destructure-----------------------> 
            const {email ,password } = userData


            const isHave =  await  this.userModel.findOne({email: email})
//check is already have same email
          if(isHave){
              throw new ConflictException({
                message: "this email is already taken"

            })
          }
//user password hashing step 
            const hashPassword = await  argon2.hash(password + process.env.SALTROUND)

// create  simple unique id 

         let newUserId:number = await this.userModel.countDocuments();


console.log(typeof(newUserId));

                newUserId = newUserId +1

console.log(newUserId)

// add created hashpassword and ubique user id 

            userData.password = hashPassword
            userData.userId = newUserId.toString()

       //create new user     

   const createduser =  await  this.userModel.create(userData);

   console.log(userData)

   return{
    Messagge : "User created successfully",
    createduser
   }

        
        } catch (error) {

              // 4️⃣ Handle Mongo duplicate key
      if (error.code === 11000) {
        throw new ConflictException('Product ID already exists');
      }

      throw error;
            
        }

    }



}
