import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Note } from '../../note/entity/note.entity';
import { SchoolDetail } from '../../school/entity/school-detail.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
    comment: 'identificador do professor',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false,
    comment: 'Nome completo do professor'
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
    comment: 'Especialidade que leciona'
  })
  subjets: string;

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    length: 150,
    nullable: false,
    comment: 'Email para login'
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    select: false,
    comment: 'Senha criptografada para login'
  })
  password?: string;

  @Column({
    type: 'bool',
    default: false,
    comment: 'flag de confirmação de primeiro acesso'
  })
  firstAccess: boolean;

  @Column({
    type: 'bool',
    default: false,
    comment: 'flag de permissão para login'
  })
  activated: boolean;

  @CreateDateColumn({
    comment: 'Data do cadastro'
  })
  createdAt: Date;

  @UpdateDateColumn({
    comment: 'Registro da ultima atualização no cadastro'
  })
  updatedAt: Date;

  @ManyToMany(() => SchoolDetail)
  @JoinTable({ name: 'school_detail_teacher' })
  schoolDetail: SchoolDetail[];

  @ManyToMany(() => Note)
  @JoinTable({ name: 'teacher_note' })
  note: Note[];

}
