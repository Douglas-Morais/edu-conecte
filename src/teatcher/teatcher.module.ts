import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherRepository } from './entity/teacher.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherRepository]),
  ],
  controllers: [],
  providers: [],
})
export class TeatcherModule { }
