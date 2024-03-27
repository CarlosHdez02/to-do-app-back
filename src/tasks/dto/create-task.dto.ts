import { IsString, IsBoolean, MinLength } from 'class-validator';

export class CreateTaskDto {
   
   /* @IsString()
    @MinLength(1)
    userName: string;

    @IsString()
    @MinLength(1)
    password: string;*/
    
    @IsString()
    @MinLength(1)
    task:string;
    
    @IsBoolean()
    finished: boolean = false;
}
