import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FAKE_SCHOOLS } from '../../test/fake-schools.const';
import { SchoolRepository } from './entity/school.repository';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

describe('SchoolController', () => {
  let controller: SchoolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [
        SchoolService,
        {
          provide: getRepositoryToken(SchoolRepository),
          useValue: {
            find: jest.fn().mockResolvedValueOnce(FAKE_SCHOOLS),
          }
        }
      ],
    }).compile();

    controller = module.get<SchoolController>(SchoolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return data from find function', () => {
    controller.findContainingChar('escola').then((result) => {
      expect(result).toBeDefined();
    });
  });

});
