import { Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';
import { CreateSchoolDTO } from './dto/create-school.dto';
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
    return await this.schoolRepository.find({
      where: { name: ILike(`%${searchString}%`) },
      take: 10
    });
  }

  /**
   * Insert new data into school table 
   * @param createSchool of CreateSchoolDTO
   * @returns Promise of School
   */
  async createSchool(createSchool: CreateSchoolDTO): Promise<School> {
    createSchool.schoolDetail.forEach((schoolDetail) => {
      schoolDetail.school = { cnpj: createSchool.cnpj };
    });
    return await this.schoolRepository.save(createSchool)
  }

}
