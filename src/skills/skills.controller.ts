import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillDto } from './dto/skill.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  @ApiResponse({ type: [SkillDto] })
  async findAll(): Promise<SkillDto[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: SkillDto })
  async findOne(@Param('id') id: string): Promise<SkillDto> {
    return this.skillsService.findOne(id);
  }
}
