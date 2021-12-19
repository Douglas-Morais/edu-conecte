import { Controller, Get, Query } from '@nestjs/common';
import { SearchValidationPipe } from '../pipe/search-validation.pipe';
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

}
