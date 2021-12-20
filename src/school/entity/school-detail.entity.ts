import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Teacher } from "../../teacher/entity/teacher.entity";
import { School } from "./school.entity";

@Entity()
export class SchoolDetail {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
    comment: 'Identificador'
  })
  id: number;

  @Column({
    type: 'tinyint',
    unsigned: true,
    comment: 'Equivalente a série no Brasil. Ex: 1ª Série, persistido "1"'
  })
  grade: number;

  @Column({
    type: 'char',
    length: 1,
    comment: 'Equivalente a turma no Brasil. Ex: 1ª Série "B"'
  })
  class: string;

  @ManyToOne(() => School, school => school.cnpj, {
    nullable: false,
  })
  school: School;

  @ManyToMany(() => Teacher)
  teacher: Teacher[];

}
