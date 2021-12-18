import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ParentsStudent } from "./parents-students.entity";

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

  @OneToMany(() => ParentsStudent, parentsStudent => parentsStudent.parents)
  parentsStudent: ParentsStudent[];

}
