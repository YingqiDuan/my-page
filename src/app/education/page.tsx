// src/app/education/page.tsx
import React from 'react';
import Image from 'next/image';

const Education: React.FC = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6">Educational Background</h2>
      <div className="space-y-8">
        {/* Graduate Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* School Emblem */}
          <Image
            src="/images/northeastern-emblem.jpg" // Replace with the actual path to the emblem
            alt="Northeastern University Emblem"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold flex items-center">
              <a
                href="https://www.northeastern.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mr-2"
              >
                Northeastern University
              </a>
            </h3>
            <p className="flex items-center">Graduate (2024 - 2026)</p>
            <p>San Jose, CA</p>
            <p>
              {/* Link to Major */}
              <a
                href="https://graduate.northeastern.edu/programs/msis-information-systems/master-of-science-in-information-systems-boston/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Information Systems
              </a>
            </p>
            {/* School Image */}
            <Image
              src="/images/northeastern-campus.jpg" // Replace with the actual path to the school image
              alt="Northeastern University Campus"
              className="object-cover rounded-lg mb-4"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Undergraduate Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* School Emblem */}
          <Image
            src="/images/Soochow_University_emblem.svg" // Replace with the actual path to the emblem
            alt="Soochow University Emblem"
            className="object-contain"
            width={100}
            height={100}
          />
          <div className="flex-1">
            
            <h3 className="text-2xl font-semibold ">
              <a
                href="https://eng.suda.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mr-2"
              >
                Soochow University
              </a>
            </h3>
            <p className="flex items-center">Undergraduate (2020 - 2024)</p>
            <p>Suzhou, Jiangsu</p>
            <p>
              {/* Link to Major */}
              <a
                href="https://chemistry.suda.edu.cn/chemistry_en/" // Replace with the actual link to the Chemistry program
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Chemistry
              </a>
            </p>
            {/* School Image */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Image
                src="/images/soochow-campus.jpg" // Replace with the actual path to the school image
                alt="Soochow University Campus"
                className="object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
              <Image
                src="/images/soochow-campus-2.png" // Replace with the actual path to the school image
                alt="Soochow University Campus 2"
                className="object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
              <Image
                src="/images/soochow-campus-3.png" // Replace with the actual path to the school image
                alt="Soochow University Campus 3"
                className="object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* High School Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* School Emblem */}
          <Image
            src="/images/suzhou-high-school-emblem.jpg" // Replace with the actual path to the emblem
            alt="Suzhou High School Emblem"
            className="object-contain"
            width={100}
            height={100}
          />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">
              <a
                href="https://en.wikipedia.org/wiki/Suzhou_High_School_of_Jiangsu_Province"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Suzhou High School of Jiangsu Province
              </a>
            </h3>
            <p>High School (2017 - 2020)</p>
            <p>Suzhou, Jiangsu</p>
            {/* School Image */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Image
                src="/images/suzhou-high-campus.jpg" // Replace with the actual path to the school image
                alt="Suzhou High School Campus"
                className="object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
