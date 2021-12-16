import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class School {
  @PrimaryColumn({
    type: 'varchar',
    length: 14,
    nullable: false,
    comment: 'Número no Cadastro Nacional de Pessoa Jurídica',
  })
  cnpj: string;

  @Column({
    type: 'varchar',
    length: 160,
    nullable: false,
    comment: 'Nome completo'
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false,
    comment: 'Endereço completo'
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
    comment: 'Cidade residente'
  })
  city: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
    comment: 'Bairro residente'
  })
  district: string;

  @Column({
    type: 'char',
    length: 2,
    nullable: false,
    comment: 'UF Símbolo da Unidade da Federação'
  })
  uf: string;

  @Column({
    type: 'bool',
    default: false,
    comment: 'Ativado após veracidade das informações cadastradas'
  })
  activated: boolean;

  @CreateDateColumn({
    comment: 'Cadastro criado em...'
  })
  created: Date;

  @UpdateDateColumn({
    comment: 'Atualização feita em...'
  })
  updated: Date;

}
