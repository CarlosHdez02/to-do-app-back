import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService:UsersService,
        private readonly jwtservice: JwtService
        ){}

    async register({name,email,password}:RegisterDTO){

       const user = await this.usersService.findOneByEmail(email)
       //Checking if the user that will be created is already on db
       if(user){
       throw new  BadRequestException('user already exists')
       }
       return await this.usersService.create({
        name,
        email,
        password:await bcryptjs.hash(password, 10), //number of steps
        }) //returns a user
        
    }

    async login({email,password}:LoginDto){
        const user = await this.usersService.findOneByEmail(email);
        if(!user){
            throw new UnauthorizedException(`Email is wrong`)
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        
        if(!isPasswordValid){
            throw new UnauthorizedException('Password is wrong')
        }

        //payload is the public info
        const payload = {email:user.email}
        const token = await this.jwtservice.signAsync(payload)

        return {token,email};
    }
}

