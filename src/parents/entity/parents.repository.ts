import { EntityRepository, Repository } from "typeorm";
import { Parents } from "./parents.entity";

@EntityRepository(Parents)
export class ParentsRepository extends Repository<Parents> { }
