import { BadRequestException } from '@nestjs/common';
import { EmailValidationPipe } from './email-validation.pipe';

describe('EmailValidationPipe', () => {
  const emailValidationPipe = new EmailValidationPipe();
  const emailDataInvalid = 'douglas@email';
  const emailDataValid = 'douglascarvalhomorais@hotmail.com';

  it('should be define', () => {
    expect(emailValidationPipe).toBeDefined();
  });

  it('should be return valid email', () => {
    const result = emailValidationPipe.transform(emailDataValid, undefined);
    expect(result).toEqual(emailDataValid);
  })

  it('should be throw bad request execption', () => {
    try {
      emailValidationPipe.transform(emailDataInvalid, undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
      expect(error.message).toBeDefined();
    }
  });
});
