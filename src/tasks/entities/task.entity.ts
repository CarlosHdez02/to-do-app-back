import {Column, DeleteDateColumn, Entity} from 'typeorm';

@Entity()
export class Task {
    
    @Column({primary:true,generated:true})
    id:number;

    @Column()
    userName:string;

    @Column()
    password:string;
    
    @Column()
    task:string;

    @Column()
    finished:boolean;

    @DeleteDateColumn()
    deteledAt: Date;

}
