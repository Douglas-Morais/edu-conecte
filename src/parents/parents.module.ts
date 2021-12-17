import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentsRepository } from './entity/parents.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParentsRepository])
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class ParentsModule { }
