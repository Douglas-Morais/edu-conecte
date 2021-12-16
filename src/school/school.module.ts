import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolRepository } from './entity/school.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolRepository])],
  controllers: [],
  providers: [],
  exports: [],
})
export class SchoolModule { }
