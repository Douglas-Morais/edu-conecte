import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../student/entity/student.entity";
import { Parents } from "./parents.entity";

@Entity()
export class ParentsStudent {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true
  })
  id: number;

  @ManyToOne(() => Parents)
  parents: Parents;

  @ManyToOne(() => Student)
  student: Student;

  @Column({
    type: 'bool',
    default: false,
    comment: 'flag de confirmação da veracidade dos dados pela Escola'
  })
  confirmedData: boolean;

}
