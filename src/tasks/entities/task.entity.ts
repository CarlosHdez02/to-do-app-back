import {Column, DeleteDateColumn, Entity} from 'typeorm';

@Entity()
export class Task {
    
    @Column({primary:true,generated:true})
    id:number;

    @Column()
    task:string;

    @Column({ default: false})
    finished:boolean;

    @DeleteDateColumn()
    deteledAt: Date;
}
