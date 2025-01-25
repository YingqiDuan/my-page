// src/app/projects/page.tsx
const projects = [
    {
      title: '项目一',
      description: '这是一个使用 Next.js 和 TypeScript 构建的项目。',
      link: 'https://github.com/username/project-one'
    },
    {
      title: '项目二',
      description: '这是一个使用 React 和 Tailwind CSS 构建的响应式网站。',
      link: 'https://github.com/username/project-two'
    },
    // 添加更多项目
  ]
  
  const Projects: React.FC = () => {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">项目经验</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-2 block" target="_blank" rel="noopener noreferrer">
                查看项目
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Projects
  