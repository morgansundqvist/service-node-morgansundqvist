import { ApiProperty } from '@nestjs/swagger';

export class WorkExperienceDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  startDate: string;
  @ApiProperty()
  endDate: string;
  @ApiProperty()
  company: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  keyFacts: string[];
}
