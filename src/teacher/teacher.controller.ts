import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { EmailValidationPipe } from '../pipe/email-validation.pipe';
import { SearchValidationPipe } from '../pipe/search-validation.pipe';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(
    private teacherService: TeacherService
  ) { }

  @Get()
  @ApiQuery({
    name: 'email',
    required: false,
    example: 'douglascarvalhomorais@hotmail.com',
    description: 'Query email is priority'
  })
  @ApiQuery({
    name: 'search',
    required: false,
    example: 'douglas'
  })
  find(
    @Query('email', EmailValidationPipe) email: string,
    @Query('search', SearchValidationPipe) searchString: string
  ) {
    if (email) {
      return this.teacherService.findByEmail(email);
    } else if (searchString) {
      return this.teacherService.findFromFiveChar(searchString);
    } else {
      throw new BadRequestException('Query email or search expected');
    }
  }

}
