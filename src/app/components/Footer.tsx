// src/app/components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Yingqi Duan.
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/YingqiDuan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yingqi-duan-a3777428a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          {/* 添加更多社交媒体链接 */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
