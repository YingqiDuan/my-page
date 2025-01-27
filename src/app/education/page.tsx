// src/app/education/page.tsx
import React from 'react';
import EducationItem from './EducationItem';
import { EDUCATION_DATA } from './education-data';

const EducationPage = () => {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        Educational Background
      </h2>
      
      <div className="space-y-12 relative md:before:absolute 
        md:before:left-12 md:before:h-full md:before:w-1 
        md:before:bg-gray-200 dark:md:before:bg-gray-700">
        {EDUCATION_DATA.map((item, index) => (
          <EducationItem 
            key={item.name}
            {...item}
            isLast={index === EDUCATION_DATA.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;