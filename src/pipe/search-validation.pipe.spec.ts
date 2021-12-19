import { BadRequestException } from '@nestjs/common';
import { SearchValidationPipe } from './search-validation.pipe';

describe('SearchValidationPipe', () => {
  let searchValidationPipe = new SearchValidationPipe();

  it('should be defined', () => {
    expect(searchValidationPipe).toBeDefined();
  });

  it('should be a string more than five chars', () => {
    const fiveChars = '12345';
    expect(searchValidationPipe.transform(fiveChars, null)).toEqual(fiveChars);
    
  });

  it('Should be a string less than five chars', () => {
    const twoChars = '12';
    const threeChars = '123';
    try {
      searchValidationPipe.transform(twoChars, null);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }

    try {
      searchValidationPipe.transform(threeChars, null);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
  });
});
