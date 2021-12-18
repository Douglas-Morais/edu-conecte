import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentsStudentRepository } from './entity/parents-students.repository';
import { ParentsRepository } from './entity/parents.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParentsRepository, ParentsStudentRepository])
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class ParentsModule { }
