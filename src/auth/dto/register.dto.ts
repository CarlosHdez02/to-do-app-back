import { IsEmail, IsString, MinLength } from "class-validator";
import {Transform} from 'class-transformer'


export class RegisterDTO{
    @IsString()
    @MinLength(3)
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(6)
    @Transform(({value})=>value.trim())
    password:string;
}