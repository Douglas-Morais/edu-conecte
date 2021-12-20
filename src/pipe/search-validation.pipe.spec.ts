import { BadRequestException } from '@nestjs/common';
import { SearchValidationPipe } from './search-validation.pipe';

describe('SearchValidationPipe', () => {
  let searchValidationPipe = new SearchValidationPipe();

  it('should be defined', () => {
    expect(searchValidationPipe).toBeDefined();
  });

  it('should be a string more than five chars', () => {
    const fiveChars = '12345';
    expect(searchValidationPipe.transform(fiveChars, undefined)).toEqual(fiveChars);
  });

  it('should be a string less than five chars', () => {
    const twoChars = '12';
    const threeChars = '123';
    try {
      searchValidationPipe.transform(twoChars, undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBeDefined();
    }

    try {
      searchValidationPipe.transform(threeChars, undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBeDefined();
    }
  });

  it('should be not empty value', () => {
    const emptyStringValue = '';
    try {
      searchValidationPipe.transform(emptyStringValue, undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBeDefined();
    }
  });
});
