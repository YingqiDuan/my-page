// src/app/education/education-data.ts
export interface EducationData {
    emblem: string;
    name: string;
    url: string;
    period: string;
    location: string;
    degreeType?: string;
    major?: {
      name: string;
      url: string;
    };
    images: string[];
  }
  
  export const EDUCATION_DATA: EducationData[] = [
    {
      emblem: '/images/education/northeastern-emblem.jpg',
      name: 'Northeastern University',
      url: 'https://www.northeastern.edu/',
      period: '2024 - 2026',
      location: 'San Jose, CA, USA',
      degreeType: 'Master',
      major: {
        name: 'Information Systems',
        url: 'https://graduate.northeastern.edu/programs/msis-information-systems/'
      },
      images: [
        '/images/education/northeastern-campus.jpg',
        '/images/education/northeastern-campus-2.jpg'
      ]
    },
    {
      emblem: '/images/education/Soochow_University_emblem.svg',
      name: 'Soochow University',
      url: 'https://eng.suda.edu.cn/',
      period: '2020 - 2024',
      location: 'Suzhou, Jiangsu, China',
      degreeType: 'Bachelor',
      major: {
        name: 'Chemistry',
        url: 'https://chemistry.suda.edu.cn/chemistry_en/main.htm'
      },
      images: [
        '/images/education/soochow-campus.jpg',
        '/images/education/soochow-campus-2.png',
        '/images/education/soochow-campus-3.png'
      ]
    },
    {
      emblem: '/images/education/suzhou-high-school-emblem.jpg',
      name: 'Suzhou High School of Jiangsu Province',
      url: 'https://en.wikipedia.org/wiki/Suzhou_High_School_of_Jiangsu_Province',
      period: '2017 - 2020',
      location: 'Suzhou, Jiangsu, China',
      images: [
        '/images/education/suzhou-high-campus.jpg'
      ]
    }
  ];