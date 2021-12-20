import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FAKE_SCHOOLS } from '../../test/fake-schools.const';
import { CreateSchoolDTO } from './dto/create-school.dto';
import { SchoolRepository } from './entity/school.repository';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

describe('SchoolController', () => {
  let controller: SchoolController;
  const createSchool: CreateSchoolDTO = {
    cnpj: "97005952000130",
    name: "escola classe 403 de samambaia",
    address: "qr 403 conjunto 1 area especial 1, 2, 3",
    city: "samambaia",
    district: "samambaia norte",
    uf: "df",
    schoolDetail: [
      {
        grade: 1,
        class: "a",
        school: undefined
      },
      {
        grade: 1,
        class: "b",
        school: undefined
      },
      {
        grade: 2,
        class: "c",
        school: undefined
      },
      {
        grade: 3,
        class: "a",
        school: undefined
      }
    ]
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [
        SchoolService,
        {
          provide: getRepositoryToken(SchoolRepository),
          useValue: {
            find: jest.fn().mockResolvedValue(FAKE_SCHOOLS),
            save: jest.fn((result) => result)
          }
        },
      ],
    }).compile();

    controller = module.get<SchoolController>(SchoolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return data from find function', async () => {
    await controller.findContainingChar('escola').then((result) => {
      expect(result).toBeDefined();
    });
  });

  it('should return data from create school into db', async () => {
    await controller.createSchool(createSchool).then((result) => {
      expect(result).toBeDefined();
      result.schoolDetail.forEach((schoolDetail) => {
        expect(schoolDetail.school).toBeDefined();
        expect(schoolDetail.school.cnpj).toEqual(createSchool.cnpj);
      });
    })
  });

});
