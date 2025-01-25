// src/app/resume/page.tsx
export const metadata = {
    title: '简历 - 张三',
    description: '张三的个人简历，包括工作经验和技能。',
    openGraph: {
      title: '简历 - 张三',
      description: '张三的个人简历，包括工作经验和技能。',
      url: 'https://yourdomain.com/resume',
      siteName: '张三的个人网站',
      images: [
        {
          url: 'https://yourdomain.com/images/og-resume.png',
          width: 800,
          height: 600,
        },
      ],
      locale: 'zh_CN',
      type: 'website',
    },
  }  

const Resume: React.FC = () => {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">个人简历</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">基本信息</h3>
            <p>姓名：张三</p>
            <p>邮箱：zhangsan@example.com</p>
            <p>电话：123-456-7890</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">工作经验</h3>
            <ul className="list-disc list-inside">
              <li>公司A - 软件工程师 (2020 - 至今)</li>
              <li>公司B - 前端开发实习生 (2018 - 2020)</li>
            </ul>
          </div>
          {/* 其他简历内容 */}
        </div>
      </section>
    )
  }
  
  export default Resume
  