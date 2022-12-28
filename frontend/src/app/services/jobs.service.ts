import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobDetail } from '../interfaces/job-details';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobs:JobDetail[] = [
    {
      id: 1,
      name: 'Job 1',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 2,
      name: 'Job 2',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 3,
      name: 'Job 3',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 4,
      name: 'Job 4',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 5,
      name: 'Job 5',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 6,
      name: 'Job 6',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 7,
      name: 'Job 7',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 8,
      name: 'Job 8',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 9,
      name: 'Job 9',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 10,
      name: 'Job 10',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
    {
      id: 11,
      name: 'Job 11',
      experience: 'Junior',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      location: {
        id: 1,
        name: 'Location 1'
      },
      domain: {
        id: 1,
        name: 'Domain 1'
      },
      startDate: "2022-09-17T03:24:00",
      skills: [{
        id: 1,
        name: 'Skill 1'
      },{
        id: 2,
        name: 'Skill 2'
      },{
        id: 3,
        name: 'Skill 3'
      }],
      benefits: [
        {
          id: 1,
          name: 'Benefit 1'
        },
        {
          id: 2,
          name: 'Benefit 2'
        },
        {
          id: 3,
          name: 'Benefit 3'
        }
      ],
      imagePath: 'assets/time/voluntariat.jpg'
    },
  ];

  constructor() { }

  public getAllJobsDetailed(): Observable<JobDetail[]> {
    return of(this.jobs);
  }
}
