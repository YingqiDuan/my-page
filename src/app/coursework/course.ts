export interface Course {
    id: string;
    name: string;
    description: string;
    professor: string;
    finalProjectUrl?: string;
  }
  
  export const courses: Course[] = [
    {
      id: "INFO 7500",
      name: "INFO 7500. Cryptocurrency and Smart Contract Engineering",
      description: "Seeks to provide a detailed understanding of the function and deployment of smart contracts using the Solidity language. Digs deep into the technical design and operation of blockchain platforms and specifically the implementation of smart contracts for operationalizing business processes. Offers students an opportunity to practice the development of decentralized autonomous organization applications using blockchain scripting languages.",
      professor: "Suhabe Bugrara",
    },
    {
      id: "INFO 6205",
      name: "INFO 6205. Program Structure and Algorithms",
      description: "Presents data structures and related algorithms, beginning with a brief review of dynamic memory allocation. Discusses the fundamental data structures in detail, including the abstract representation, supporting algorithms, and implementation methods. Focuses on understanding the application of the abstract data structure and the circumstances that affect implementation decisions. Covers lists, stacks, queues, trees, hash tables, and graphs. Covers recursion and searching and sorting algorithms in detail. Emphasizes data abstraction and encapsulation in code design. Explores external storage structures, time permitting.",
      professor: "Jagadeesh Vasudevamurthy",
    },
    {
      id: "INFO 5100",
      name: "INFO 5100. Application Engineering and Development",
      description: "Takes students in a step-by-step manner through the process of systematically combining UX techniques, business processes, and complex data models to assemble applications that are user-friendly and meet business requirements. Employs the object-oriented paradigm, visual user experience, and system design principles to put together complicated, powerful, real-world applications. The primary objective of this course is to practice social-technical software engineering methods and tools to solve real-world problems. Offers students an opportunity to learn innovative design and programming techniques to build significant business applications quickly; to practice simple and smart ways of making software construction enjoyable; and to master the art of how to systematically write software programs to solve any business problem.",
      professor: "Taral Oza",
      finalProjectUrl: "https://github.com/YingqiDuan/INFO5100_002309930_YingqiDuan",
    },
    {
      id: "INFO 6105",
      name: "INFO 6105. Data Science Engineering Methods and Tools",
      description: "Introduces the fundamental techniques for machine learning and data science engineering. Discusses a variety of machine learning algorithms, along with examples of their implementation, evaluation, and best practices. Lays the foundation of how learning models are derived from complex data pipelines, both algorithmically and practically. Topics include supervised learning (parametric/nonparametric algorithms, support vector machines, kernels, neural networks, deep learning) and unsupervised learning (clustering, dimensionality reduction, recommender systems). Based on numerous real-world case studies.",
      professor: "Pramod Gupta",
      finalProjectUrl: "https://github.com/YingqiDuan/CNN_crypto_model",
    },
    
  ];
  