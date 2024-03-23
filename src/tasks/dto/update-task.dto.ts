import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional, IsString, MinLength, IsBoolean } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    
    @IsString()
    @MinLength(1)
    @IsOptional()
    userName: string;
    
    @IsString()
    @MinLength(1)
    @IsOptional()
    password: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    task:string;
    
    @IsBoolean()
    @IsOptional()
    @IsOptional()
    finished: boolean;
}

