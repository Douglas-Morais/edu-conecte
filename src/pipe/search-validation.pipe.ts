import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { minLength } from 'class-validator';

@Injectable()
export class SearchValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!minLength(value, 5)) {
      throw new BadRequestException('Query with at least five characters expected')
    }
    return value;
  }
}
