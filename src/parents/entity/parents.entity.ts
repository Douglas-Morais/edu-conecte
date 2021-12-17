import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Student } from "../../student/entity/student.entity";

@Entity()
export class Parents {
  @PrimaryColumn({
    type: 'varchar',
    length: 11,
    comment: 'CPF responsável pelo aluno'
  })
  cpf: string;

  @Column({
    type: 'varchar',
    length: 150,
    comment: 'Nome completo'
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 150,
    comment: 'Email de acesso e comunicação do sistema'
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'Senha de acesso criptografada'
  })
  password: string;

  @ManyToMany(() => Student, student => student.parents)
  @JoinTable({name: 'parents_student'})
  students: Student[];

}
