import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isEmail } from 'class-validator';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value && !isEmail(value)) {
      throw new BadRequestException("Query email with valid email expected");
    }
    return value;
  }
}
