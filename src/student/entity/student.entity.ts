import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Parents } from "../../parents/entity/parents.entity";
import { SchoolDetail } from "../../school/entity/school-detail.entity";

@Entity()
export class Student {
  @PrimaryColumn({
    type: 'varchar',
    length: 30,
    comment: 'Matrícula do Aluno'
  })
  enrollment: string;

  @Column({
    type: "varchar",
    length: 150,
    comment: 'Nome completo do Aluno'
  })
  name: string;

  @ManyToMany(() => Parents, parents => parents.students)
  parents: Parents[];

  @ManyToOne(() => SchoolDetail)
  schoolDetail: SchoolDetail;

}
