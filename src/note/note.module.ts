import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './entity/category.repository';
import { NoteRepository } from './entity/note.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([NoteRepository, CategoryRepository]),
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class NoteModule { }
