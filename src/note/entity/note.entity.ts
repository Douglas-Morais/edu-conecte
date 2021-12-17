import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "../../teatcher/entity/teacher.entity";
import { Category } from "./category.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
    comment: 'Identificador das notificações'
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    comment: 'Descrição da notificação'
  })
  description: string;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn()
  category: Category;

  @ManyToMany(() => Teacher)
  teacher: Teacher[];

}
