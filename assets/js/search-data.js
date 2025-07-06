// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-️-computer-vision-engineer-at-nuwa-pen",
          title: '🖋️ Computer Vision Engineer at Nuwa Pen',
          description: "",
          section: "News",},{id: "news-started-bsc-artificial-intelligence-at-university-of-groningen",
          title: '🤖 Started BSc Artificial Intelligence at University of Groningen',
          description: "",
          section: "News",},{id: "news-started-bsc-computer-science-at-university-of-groningen",
          title: '💻 Started BSc Computer Science at University of Groningen',
          description: "",
          section: "News",},{id: "news-machine-learning-intern-at-klippa",
          title: '🪪 Machine Learning Intern at Klippa',
          description: "",
          section: "News",},{id: "news-graduate-ai-and-cs",
          title: '🎓 Graduate AI and CS',
          description: "",
          section: "News",},{id: "news-software-engineer-at-snapchat-spectacles",
          title: '😎 Software Engineer at Snapchat Spectacles',
          description: "",
          section: "News",},{id: "projects-husaria",
          title: 'Husaria++',
          description: "Translation of C++ into Polish",
          section: "Projects",handler: () => {
              window.location.href = "/projects/husaria_plusplus/";
            },},{id: "projects-klippa",
          title: 'Klippa',
          description: "Fraud Detection on Identity Documents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/klippa/";
            },},{id: "projects-nuwa-pen",
          title: 'Nuwa Pen',
          description: "Ballpoint Pen That Digitzes Your Handwriting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nuwapen/";
            },},{id: "projects-predicting-double-pendulums",
          title: 'Predicting Double Pendulums',
          description: "Discovering Dynamics, Conservation Laws and Symmetries Underlying a Double Pendulum System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pendulums/";
            },},{id: "projects-qr-code-generator-and-tracker",
          title: 'QR Code Generator and Tracker',
          description: "Free and Simple",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qr_tracker/";
            },},{id: "projects-ray-space",
          title: 'Ray Space',
          description: "Ray Tracing Environment For Planets And Stars",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rayspace/";
            },},{id: "projects-shkyera-engine",
          title: 'Shkyera Engine',
          description: "Game Engine with custom ECS, Job System, Asset Management and UI Editor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shkyera-engine/";
            },},{id: "projects-shkyera-grad",
          title: 'Shkyera Grad',
          description: "Karpathy&#39;s micrograd but in C++",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shkyeragrad/";
            },},{id: "projects-snapchat-spectacles",
          title: 'Snapchat Spectacles',
          description: "Standalone Augmented Reality Glasses",
          section: "Projects",handler: () => {
              window.location.href = "/projects/specs/";
            },},{id: "projects-travelling-salesman-problem",
          title: 'Travelling-Salesman-Problem',
          description: "Web App with a few, standard solvers of this legendary problem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tsp_solver/";
            },},{id: "projects-video-driven-graph-network-based-simulators",
          title: 'Video-Driven Graph Network-Based Simulators',
          description: "Machine Learning and the Physical Sciences Workshop, NeurIPS 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vdgns/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
