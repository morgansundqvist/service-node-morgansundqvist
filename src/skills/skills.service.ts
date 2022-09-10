import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SkillDto } from './dto/skill.dto';

const skills = [
  {
    id: '72787bb9-c5db-42b5-ba4b-5b0efeaa1b09',
    category: 'Business',
    skill: 'Leadership',
  },
  {
    id: '4135c021-bf68-463c-b08a-d70d7075e4ef',
    category: 'Business',
    skill: 'Financial',
  },
  {
    id: '4c299720-54c6-46c4-8922-108e055bfb80',
    category: 'Business',
    skill: 'Accounting',
  },
  {
    id: 'f515a5df-b81c-4241-9a69-58937bb9a515',
    category: 'Business',
    skill: 'Logistics',
  },
  {
    id: '2cdf3448-6c94-4cc8-b61c-dc298bd84e63',
    category: 'Business',
    skill: 'Project management',
  },
  {
    id: '9ff7fcea-d1fc-44f3-af97-f802e722da74',
    category: 'Business',
    skill: 'Stakeholder management',
  },
  {
    id: '478b9287-a377-4bcf-b8f7-e4939e708ea0',
    category: 'IT',
    skill: 'ERP implementation',
  },
  {
    id: 'f69818ea-1d04-4712-808d-81d0bde5e85d',
    category: 'IT',
    skill: 'TOGAF',
  },
  {
    id: 'e4766c92-873f-4819-bee2-87aee317b572',
    category: 'IT',
    skill: 'Software Architecture',
  },
  {
    id: 'b9402181-6135-4d3c-ad67-758336af0f8b',
    category: 'IT',
    skill: 'SCRUM',
  },
  {
    id: 'b9402181-6135-4d3c-ad67-758336af0f8b',
    category: 'IT',
    skill: 'Agile Kanban',
  },
  {
    id: 'c09393f4-ac3b-41d5-8337-26d90675c4fb',
    category: 'Programming languages',
    skill: '.Net C#',
  },
  {
    id: 'f8b0c228-86b6-4ba4-9efe-cd035b898aa2',
    category: 'Programming languages',
    skill: 'Python',
  },
  {
    id: '97c6ab7a-3f9a-44ac-82b6-5b5cf33f1d46',
    category: 'Programming languages',
    skill: 'JavaScript (TypeScript, React, NodeJS)',
  },
  {
    id: 'e1085582-8a47-45e6-8230-9034295390ee',
    category: 'Programming languages',
    skill: 'Go',
  },
];

@Injectable()
export class SkillsService {
  async findAll(): Promise<SkillDto[]> {
    return skills;
  }

  async findOne(id: string): Promise<SkillDto> {
    let matches = skills.filter((item) => item.id == id);
    if (matches.length === 0)
      throw new HttpException(
        'Could not find skill by id',
        HttpStatus.NOT_FOUND,
      );
    return matches[0];
  }
}
