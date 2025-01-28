// src/app/projects/page.tsx
import { projects } from './projectsData';


const Projects: React.FC = () => {
  return (
    <section className="animate-fadeIn" >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-6 transition-all border rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-card to-card/50">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <ul className="mt-2">
              {project.techStack.map((tech, techIndex) => (
                <li key={techIndex} className="ml-4 list-disc">{tech}</li>
              ))}
            </ul>
            <div className="mt-4 space-x-4">
              {project.githubLink && project.githubLink.trim() !== '' && (
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.liveLink && project.liveLink.trim() !== '' && (
                <a
                  href={project.liveLink.startsWith('http') ? project.liveLink : `/${project.liveLink}`}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

