import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Repository } from 'typeorm';
import { TicketEntity } from './entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketPost } from './models/ticketpost.interface';

@Injectable()
export class TicketsService {

  constructor(
    @InjectRepository(TicketEntity)
    private readonly ticketRepository: Repository<TicketEntity>
  ){}


  create(ticketPost: TicketPost) {
    return this.ticketRepository.save(ticketPost)
  }

  findAll() {
    return `This action returns all tickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
