// src/app/education/EducationItem.tsx
import React from 'react';
import Image from 'next/image';

interface EducationItemProps {
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
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({
  emblem,
  name,
  url,
  period,
  location,
  degreeType,
  major,
  images,
  isLast
}) => {
  return (
    <div className="relative flex flex-col md:flex-row group">
      
      {/* Timeline dot */}
      {/* <div className="absolute left-0 md:left-12 top-6 w-4 h-4 
        bg-blue-500 rounded-full z-10 transform -translate-x-1/2
        group-hover:scale-125 transition-transform" /> */}

      <div className="w-24 h-24 flex-shrink-0 ml-6 md:ml-0 mb-4 md:mb-0">
        <Image
          src={emblem}
          alt={`${name} 校徽`}
          width={96}
          height={96}
          className="object-contain p-2"
          loading="lazy"
        />
      </div>

      <div className="flex-1 ml-8 md:ml-12">
        <h3 className="text-xl font-semibold mb-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 
              transition-colors duration-200"
            aria-label={`${name} 官方网站（新窗口打开）`}
          >
            {name}
          </a>
        </h3>

        <div className="space-y-1 text-gray-600 dark:text-gray-300">
          <p className="flex items-center space-x-2">
            <span className="font-medium">{degreeType}</span>
            <span className="text-sm">({period})</span>
          </p>
          <p>{location}</p>
          {major && (
            <p>
              Major:{" "}
              <a
                href={major.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {major.name}
              </a>
            </p>
          )}
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {images.map((img, idx) => (
              <div 
                key={img}
                className="relative h-48 rounded-lg overflow-hidden 
                  shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={img}
                  alt={`${name} 校园照片 ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                />
              </div>
            ))}
          </div>
        )}

        {!isLast && (
          <div className="h-8 md:hidden" /> // 移动端间距
        )}
      </div>
    </div>
  );
};

export default EducationItem;