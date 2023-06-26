import {Entity,Column,  PrimaryGeneratedColumn } from 'typeorm'

@Entity("tickets")
export class TicketEntity {
  @PrimaryGeneratedColumn()
  id:number; 
  
  @Column() 
  cc:number; 

  @Column({type:'timestamp', default:() => 'CURRENT_TIMESTAMP'})
  createdAt: string;

  @Column() 
  description:string; 

  @Column({default:false})
  finished:boolean;


}


