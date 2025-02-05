// src/app/resume/page.tsx
import React from 'react';
import Project from './project'
import Link from 'next/link';

const Resume: React.FC = () => {
  const projects = [
    {
      title: 'Symmetry-Driven Texture Generation Framework',
      githubLink: 'https://github.com/YingqiDuan/Symmetry-Generation',
      detailsLink: '../projects/Symmetry-Generation',
      tech: 'Python, PyTorch, NumPy, Pandas',
    },
    {
      title: 'AWS-based Job Recommendation System',
      githubLink: 'https://github.com/YingqiDuan/aws-job-web',
      detailsLink: '',
      tech: 'Java, HTML, CSS, JavaScript, AWS, REST APIs, MySQL',
    },
    {
      title: 'CNN Crypto Trading Model',
      githubLink: 'https://github.com/YingqiDuan/CNN_crypto_model',
      detailsLink: '../projects/Crypto-Trading',
      tech: 'PyTorch, NumPy, Pandas',
    },
    {
      title: 'Sphere Embedding and Tiling System for Meshes',
      githubLink: '',
      detailsLink: '../projects/Embedding-Meshes',
      tech: 'MATLAB',
    },
  ];

  return (
    <section className="animate-fadeIn p-6">
      <div className="space-y-8">
        {/* 个人信息 */}
        <div>
          <h3 className="text-3xl font-semibold text-center">Yingqi Duan</h3>
        </div>

        {/* 教育背景 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">Northeastern University</h4>
              <p className="text-sm text-gray-600">San Jose, CA, USA</p>
              <p className="italic">Master of Science in Information Systems</p>
              <p className="text-sm text-gray-600">Sep 2024 – Dec 2026</p>
              <Link href='../coursework'
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer">
                Coursework
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">Soochow University</h4>
              <p className="text-sm text-gray-600">Suzhou, Jiangsu, China</p>
              <p className="italic">Bachelor of Science in Chemistry</p>
              <p className="text-sm text-gray-600">Sep 2020 – Jun 2024</p>
            </div>
          </div>
        </div>

        {/* 工作经验 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">ByteDance</h4>
              <p className="text-sm text-gray-600">Beijing, China</p>
              <p className="italic">Data Analyst, Intern</p>
              <p className="text-sm text-gray-600">Sep – Nov 2023</p>
              <Link href='../projects/Data-Analysis'
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer">
                Details
              </Link>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Tech:</strong> Python, MySQL, Tableau
              </p>
            </div>
            {/* 可以添加更多工作经验 */}
          </div>
        </div>

        {/* 项目经历 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                githubLink={project.githubLink}
                detailsLink={project.detailsLink}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
