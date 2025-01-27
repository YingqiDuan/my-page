// src/app/projects/page.tsx
const projects = [
  {
    title: 'Symmetry Generation',
    description: 'A framwork for generating symmetrical textures and optimizing geometric transformations',
    techStack: ['Pandas', 'NumPy', 'PyTorch','Matplotlib'],
    githubLink: 'https://github.com/YingqiDuan/Symmetry-Generation',
    liveLink: '/Symmetry-Generation',
  },
  {
    title: 'Crypto Trading',
    description: 'A CNN model to predict cryptocurrency prices using Binance API data',
    techStack: ['Pandas', 'NumPy', 'PyTorch', 'TensorBoard'],
    githubLink: 'https://github.com/YingqiDuan/CNN_crypto_model',
    liveLink: '/Crypto-Trading',
  },
  {
    title: 'Job Recommendation',
    description: 'An interactive job search web page',
    techStack: ['Java','HTML','CSS','JavaScript','AWS','REST APIS','MySQL'],
    githubLink: 'https://github.com/YingqiDuan/aws-job-web',
    liveLink:"/Job-Recommendation"
  },
  {
    title: 'Data Analysis',
    description: 'Researched live e-commerce development driven by data, analyzing the business performance of various product categories and the user behavior patterns',
    techStack: ['Python','NumPy','MySQL','Tableau'],
    githubLink:'',
    liveLink:'/Data-Analysis'
  },
  {
    title: 'Embedding Meshes',
    description:'A system for embedding meshes onto a sphere with complex geometric constraints',
    techStack: ['MATLAB'],
    githubLink:'',
    liveLink:'/Embedding-Meshes'
  },
  {
    title: 'Leetcode',
    description:'My Leetcode solution',
    techStack: ['Python'],
    githubLink:'https://github.com/YingqiDuan/Leetcode',
    liveLink:''
  },
  {
    title:'My Page',
    description:'Web page called Saturn',
    techStack:['React','Next.js','TypeScript'],
    githubLink:'https://github.com/YingqiDuan/my-page',
    liveLink:''
  }
  // 添加更多项目
];

const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Project and Experience</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <ul className="mt-2">
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
                GitHub
              </a>
              <a
                href={project.liveLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

  