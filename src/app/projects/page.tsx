// src/app/projects/page.tsx
const projects = [
  {
    title: '项目一',
    description: '这是一个使用 Next.js 和 TypeScript 构建的项目。',
    techStack: ['Next.js', 'TypeScript', 'CSS Modules'],
    githubLink: 'https://github.com/username/project-one',
    liveLink: 'https://project-one.example.com',
  },
  {
    title: '项目二',
    description: '这是一个使用 React 和 Tailwind CSS 构建的响应式网站。',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    githubLink: 'https://github.com/username/project-two',
    liveLink: 'https://project-two.example.com',
  },
  // 添加更多项目
];

const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Project Experience</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <ul className="mt-2">
              <li className="font-medium">Tech stack:</li>
              {project.techStack.map((tech, techIndex) => (
                <li key={techIndex} className="ml-4 list-disc">{tech}</li>
              ))}
            </ul>
            <div className="mt-4 space-x-4">
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 链接
              </a>
              <a
                href={project.liveLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                在线预览
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

  