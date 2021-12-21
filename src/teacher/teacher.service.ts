import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';
import { Teacher } from './entity/teacher.entity';
import { TeacherRepository } from './entity/teacher.repository';

@Injectable()
export class TeacherService {
  constructor(
    private readonly teacherRepository: TeacherRepository
  ) { }

  async findFromFiveChar(searchString: string): Promise<Teacher[]> {
    return await this.teacherRepository.find({
      where: { name: ILike(`%${searchString}%`) },
      take: 10
    });
  }

  async findByEmail(email: string): Promise<Teacher> {
    const resultFind = await this.teacherRepository.findOne({ where: { email: email } });
    if(!resultFind) throw new HttpException("The search returned no results.", HttpStatus.NOT_FOUND);
    return resultFind
  }

}
