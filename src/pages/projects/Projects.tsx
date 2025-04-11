import ProjectCard from "./ProjectCard";

const Projects = () => {
  const details = [
    {
      emoji: "🌐",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/sohanreddyk/hackernews-server",
      description: "Developed Hackernews server clone",
    },
    {
      emoji: "⛑️",
      title: "Safety Helmet Detection",
      projectUrl: "https://github.com/jswaroop123/FileLess_Malware",
      description:
        "Developed ML model using YOLOv5 + Streamlit to detect Safety Helmet",
    },
    {
      emoji: "🎗️",
      title: "Resume Builder",
      projectUrl: "https://github.com/sohanreddyk/resumebuilder",
      description:
        "Developed an AI-powered Resume Builder using React + TailwindCSS",
    },
    {
      emoji: "⚽️",
      title: "PL-Prediction",
      projectUrl:
        "https://github.com/sohanreddyk/PL-prediction",
      description: "Developed a Premier League Match Prediction System",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto px-4">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <ProjectCard
            key={index} emoji={item.emoji}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
          />
        ))}
      </div>
       </div>
  );
};

export default Projects;
