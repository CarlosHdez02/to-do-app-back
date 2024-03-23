import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'user_crud',
      password: "carlos",
      database:'tasks',
      autoLoadEntities:true, 
      synchronize:true,
    }),
    UsersModule,
    AuthModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
