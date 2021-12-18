import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ParentsStudent } from "../../parents/entity/parents-students.entity";
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

  @ManyToOne(() => SchoolDetail)
  schoolDetail: SchoolDetail;

  @OneToMany(() => ParentsStudent, parentsStudent => parentsStudent.student)
  parentsStudent: ParentsStudent[];

}
