// src/app/education/page.tsx
const Education: React.FC = () => {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">学业背景</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">本科</h3>
            <p>某某大学 - 计算机科学与技术 (2016 - 2020)</p>
            <p>GPA: 3.8/4.0</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">高中</h3>
            <p>某某中学 (2013 - 2016)</p>
          </div>
          {/* 其他教育经历 */}
        </div>
      </section>
    )
  }
  
  export default Education
  