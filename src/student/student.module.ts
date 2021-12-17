import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './entity/student.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentRepository])
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class StudentModule {}
