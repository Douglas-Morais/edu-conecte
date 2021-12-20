import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SearchValidationPipe } from '../pipe/search-validation.pipe';
import { CreateSchoolDTO } from './dto/create-school.dto';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolController {
  constructor(
    private readonly schoolService: SchoolService
  ) {}
  
  @Get()
  findContainingChar(@Query('search', SearchValidationPipe) searchString: string) {
    return this.schoolService.getSchoolFromFiveChar(searchString);
  }

  @Post()
  createSchool(@Body() createSchoolDTO: CreateSchoolDTO) {
    return this.schoolService.createSchool(createSchoolDTO);
  }

}
