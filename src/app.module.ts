import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { SchoolModule } from './school/school.module';
import { TeacherModule } from './teacher/teacher.module';
import { NoteModule } from './note/note.module';
import { ParentsModule } from './parents/parents.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => Object.assign(await getConnectionOptions()),
    }),
    SchoolModule,
    TeacherModule,
    NoteModule,
    ParentsModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
