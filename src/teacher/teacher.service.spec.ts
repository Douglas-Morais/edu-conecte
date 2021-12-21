import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Called } from '../../test/enum/called-times.enum';
import { FAKE_TEACHER } from '../../test/fake-teacher.const';
import { TeacherRepository } from './entity/teacher.repository';
import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
  let service: TeacherService;
  let teacherRepository: TeacherRepository;
  const searchString = 'douglas';
  const email = 'douglascarvalhomorais@hotmail.com';

  const mockFindFromFiveChar = jest.fn(() => {
    const found = FAKE_TEACHER.find((teacher) => teacher.name.includes(searchString));
    return [found]
  });
  const mockFindByEmail = jest.fn(() => {
    const found = FAKE_TEACHER.find((teacher) => teacher.email = email);
    return found
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeacherService,
        {
          provide: getRepositoryToken(TeacherRepository),
          useValue: {
            find: mockFindFromFiveChar,
            findOne: mockFindByEmail,
          }
        }
      ],
    }).compile();

    service = module.get<TeacherService>(TeacherService);
    teacherRepository = module.get<TeacherRepository>(TeacherRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a teacher through the findFromFiveChar function', () => {
    service.findFromFiveChar(searchString)
      .then((teacher) => {
        expect(teacher.length).toBeGreaterThan(0);
        expect(teacherRepository.find).toHaveBeenCalledTimes(Called.ONE_TIME)
      })
  });

  it('should return a teacher searching by email', () => {
    service.findByEmail(email)
      .then((teacher) => {
        expect(teacher).toBeDefined();
        expect(teacher.id).toBeDefined();
        expect(teacher.email).toEqual(email);
        expect(teacherRepository.findOne).toHaveBeenCalledTimes(Called.ONE_TIME)
      })
  });
});
