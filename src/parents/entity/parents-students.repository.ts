import { EntityRepository, Repository } from "typeorm";
import { ParentsStudent } from "./parents-students.entity";

@EntityRepository(ParentsStudent)
export class ParentsStudentRepository extends Repository<ParentsStudent> { }
