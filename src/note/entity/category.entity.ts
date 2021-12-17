import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Note } from "./note.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
    comment: 'identificador da categoria'
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    comment: 'Descrição da Categoria'
  })
  description: string;
  
}
