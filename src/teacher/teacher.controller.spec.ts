import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Called } from '../../test/enum/called-times.enum';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';



describe('TeacherController', () => {
  let controller: TeacherController;
  let service: TeacherService;
  const email = 'douglascarvalhomorais@hotmail.com';
  const searchString = 'douglas';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherController],
      providers: [
        {
          provide: TeacherService,
          useValue: {
            findByEmail: jest.fn().mockResolvedValue('findByEmail'),
            findFromFiveChar: jest.fn().mockResolvedValue('findFromFiveChar'),
          }
        },
      ],
    }).compile();

    controller = module.get<TeacherController>(TeacherController);
    service = module.get<TeacherService>(TeacherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be call only findByEmail function', async () => {    
    try {
      await controller.find(email, undefined);
    } catch (error) {
      expect(error).toBeUndefined();
    }
    expect(service.findByEmail).toHaveBeenCalledTimes(Called.ONE_TIME);
    expect(service.findFromFiveChar).toHaveBeenCalledTimes(Called.NOT_ONCE);
  });

  it('should be call only findFromFiveChar function', async () => {    
    try {
      await controller.find(undefined, searchString);
    } catch (error) {
      expect(error).toBeUndefined();
    }
    expect(service.findByEmail).toHaveBeenCalledTimes(Called.NOT_ONCE);
    expect(service.findFromFiveChar).toHaveBeenCalledTimes(Called.ONE_TIME);
  });
  
  it('should be throw bad request exception', async () => {    
    try {
      await controller.find(undefined, undefined);
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
    expect(service.findByEmail).toHaveBeenCalledTimes(Called.NOT_ONCE);
    expect(service.findFromFiveChar).toHaveBeenCalledTimes(Called.NOT_ONCE);
  });

});
