import { Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';
import { School } from './entity/school.entity';
import { SchoolRepository } from './entity/school.repository';

@Injectable()
export class SchoolService {
  constructor(
    private readonly schoolRepository: SchoolRepository
  ) { }

  /**
   * Find schools from five characters
   * @param stringSearch 
   * @returns Array of School containing @param
   */
  async getSchoolFromFiveChar(searchString: string): Promise<School[]> {
    console.log(searchString);
    return await this.schoolRepository.find({
      where: { name: ILike(`%${searchString}%`) },
      take: 10
    });
  }
}
