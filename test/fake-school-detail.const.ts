import { CreateSchoolDetailDTO } from "../src/school/dto/create-school-detail.dto";

export const FAKE_SCHOOL_DETAIL: CreateSchoolDetailDTO[] = [
  { id: 1, grade: 2, class: 'a', school: { cnpj: '12345678901234' } },
  { id: 2, grade: 6, class: 'f', school: { cnpj: '12345678901234' } },
  { id: 3, grade: 1, class: 'b', school: { cnpj: '12345678901234' } },
  { id: 4, grade: 2, class: 'a', school: { cnpj: '12345678901234' } },
  { id: 5, grade: 1, class: 'c', school: { cnpj: '12345678901234' } },
  { id: 6, grade: 3, class: 'd', school: { cnpj: '12345678901234' } },
  { id: 7, grade: 4, class: 'f', school: { cnpj: '12345678901234' } },
];
