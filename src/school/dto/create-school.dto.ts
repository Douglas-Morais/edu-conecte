import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  MaxLength,
  Length,
  IsString,
  IsNumberString,
  IsAlpha,
  IsArray,
  ValidateNested
} from "class-validator";
import { CreateSchoolDetailDTO } from "./create-school-detail.dto";

export class CreateSchoolDTO {
  @ApiProperty({
    minLength: 14,
    maxLength: 14,
    example: '97005952000130'
  })
  @Length(14, 14)
  @IsString()
  @IsNumberString()
  cnpj: string;

  @ApiProperty({
    maxLength: 160,
    example: 'escola classe 403 de samambaia'
  })
  @MaxLength(160)
  @IsString()
  name: string;

  @ApiProperty({
    maxLength: 150,
    example: 'qr 403 conjunto 1 area especial 1, 2, 3'
  })
  @MaxLength(150)
  @IsString()
  address: string;

  @ApiProperty({
    maxLength: 60,
    example: 'samambaia'
  })
  @MaxLength(60)
  @IsString()
  city: string;

  @ApiProperty({
    maxLength: 60,
    example: 'samambaia norte'
  })
  @MaxLength(60)
  @IsString()
  district: string;

  @ApiProperty({
    minLength: 2,
    maxLength: 2,
    example: 'df'
  })
  @Length(2, 2)
  @IsString()
  @IsAlpha()
  uf: string;

  @ApiProperty({
    type: [CreateSchoolDetailDTO],
    example: [
      { grade: 1, class: 'a' },
      { grade: 1, class: 'b' },
      { grade: 2, class: 'c' },
      { grade: 3, class: 'a' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSchoolDetailDTO)
  schoolDetail: CreateSchoolDetailDTO[];
}
