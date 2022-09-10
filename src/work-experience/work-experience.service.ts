import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WorkExperienceDto } from './dto/work-experience.dto';

const workExperience = [
  {
    id: '4741e341-c368-487f-b9bb-b2963b729049',
    startDate: '2006-06',
    endDate: '2007-10',
    company: 'Software Innovation AB',
    role: 'Developer',
    keyFacts: [
      'Developer within CRM domain worked with large clients such as H&M',
    ],
  },
  {
    id: 'f8cd529e-6b0e-446c-aac0-bcd00bd6967e',
    startDate: '2007-10',
    endDate: '2012-12',
    company: 'Annata AB',
    role: 'Development team lead / ERP Specialist',
    keyFacts: [
      'Development team lead, onboarding and mentoring new developer',
      'Functonal ERP specialist within Automotive, Logistics, Inventory management and Financials',
    ],
  },
  {
    id: '2790b8bf-72c5-45af-a6e5-d5aaf0053f4f',
    startDate: '2012-12',
    endDate: '2014-07',
    company: 'Pingdom (pingdom.com)',
    role: 'CTO',
    keyFacts: [
      'Reponsible for development and operation of Pingdom',
      'Inventor of patents within monitoring analytics',
      'Responsible for 20+ DevOps fantastic colleagues',
      'Journey from 30 000 to 600 000 customers',
    ],
  },
  {
    id: '0eab7d44-e54b-4247-9bbf-541a15320aa4',
    startDate: '2014-07',
    endDate: '2017-09',
    company: 'Orango AB / Annata AB',
    role: 'Microsoft Dynamics 365 F&O ERP Specialist',
    keyFacts: [
      'Responsible for complete ERP projects',
      'Technical lead',
      'Certified in Dynamics Ax 3, Dynamics Ax 2009 and Dynamics 365 F&O',
      'Financial, Logistics, Inventory Management ,Automotive, Accounts Recievable, Accounts Payable domains',
    ],
  },
  {
    id: '92cdeaa1-ef45-4f39-90a5-eb84f721c2a0',
    startDate: '2017-09',
    endDate: '2021-06',
    company: 'Dooer AB (dooer.com, voitto.se)',
    role: 'CTO',
    keyFacts: [
      'Product owner and architect for Saas platform, 150+ micro services, CI/CD, GDPR',
      'Product owner for bookkeeping service',
      'Product owner for backoffice system',
      'Manager for 30+ fantastic DevOps colleagues',
    ],
  },
  {
    id: '21666b47-1e86-4372-86cb-28d6f055b6d3',
    startDate: '2021-07',
    endDate: 'Present',
    company: 'Volvo Construction Equipment AB',
    role: 'Senior IT Solution Architect / Product owner',
    keyFacts: [
      'Architect within Connected Services domain',
      'Working with digital services for IOT data from all connected machines',
      'Product owner and architect for creating a micro service architectural pattern and platform',
    ],
  },
];

@Injectable()
export class WorkExperienceService {
  async findAll(): Promise<WorkExperienceDto[]> {
    return workExperience;
  }

  async findOne(id: string): Promise<WorkExperienceDto> {
    let matches = workExperience.filter((item) => item.id == id);
    if (matches.length === 0)
      throw new HttpException(
        'Could not find experience by id',
        HttpStatus.NOT_FOUND,
      );
    return matches[0];
  }
}
