import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiResponseProperty } from '@nestjs/swagger';
import { WorkExperienceDto } from './dto/work-experience.dto';
import { WorkExperienceService } from './work-experience.service';

@Controller('work-experience')
export class WorkExperienceController {
  constructor(private readonly workExperienceService: WorkExperienceService) {}

  @Get()
  @ApiResponse({ type: [WorkExperienceDto] })
  async findAll(): Promise<WorkExperienceDto[]> {
    return this.workExperienceService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: WorkExperienceDto })
  async findOne(@Param('id') id: string): Promise<WorkExperienceDto> {
    return this.workExperienceService.findOne(id);
  }
}
