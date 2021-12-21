import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherRepository } from './entity/teacher.repository';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherRepository]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule { }
