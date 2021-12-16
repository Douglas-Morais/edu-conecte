import { EntityRepository, Repository } from 'typeorm';
import { School } from './school.entity';

@EntityRepository(School)
export class SchoolRepository extends Repository<School> { }
