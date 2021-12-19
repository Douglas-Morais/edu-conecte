import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolDetailRepository } from './entity/school-detail.repository';
import { SchoolRepository } from './entity/school.repository';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolRepository, SchoolDetailRepository])],
  controllers: [SchoolController],
  providers: [SchoolService],
  exports: [],
})
export class SchoolModule { }
