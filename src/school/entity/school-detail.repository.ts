import { EntityRepository, Repository } from "typeorm";
import { SchoolDetail } from "./school-detail.entity";

@EntityRepository(SchoolDetail)
export class SchoolDetailRepository extends Repository<SchoolDetail> { }
