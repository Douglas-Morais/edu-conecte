import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolDetailRepository } from './entity/school-detail.repository';
import { SchoolRepository } from './entity/school.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolRepository, SchoolDetailRepository])],
  controllers: [],
  providers: [],
  exports: [],
})
export class SchoolModule { }
