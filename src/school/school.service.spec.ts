import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FAKE_SCHOOLS } from '../../test/fake-schools.const';
import { SchoolRepository } from './entity/school.repository';
import { SchoolService } from './school.service';

describe('SchoolService', () => {
  let service: SchoolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<SchoolService>(SchoolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
