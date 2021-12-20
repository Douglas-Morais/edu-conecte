import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Min, Max, IsAlpha, Length } from "class-validator";

export class CreateSchoolDetailDTO {
  @ApiHideProperty()
  id: number;

  @ApiProperty({
    minimum: 1,
    maximum: 10
  })
  @Min(1)
  @Max(10)
  grade: number;

  @ApiProperty({ maxLength: 1 })
  @IsAlpha()
  @Length(1, 1)
  class: string;

  @ApiHideProperty()
  school: { cnpj: string };

}
