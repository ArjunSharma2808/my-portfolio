import ProjectCard from "./ProjectCard";

const Projects = () => {
  const details = [
    {
      emoji: "🌐",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/ArjunSharma2808/hackernews-server",
      description: "Developed Hackernews server clone",
    },
    {
      emoji: "⛑️",
      title: "Safety Helmet Detection",
      projectUrl: "https://github.com/ArjunSharma2808/TRAFFIC-VIOLATION-DETECTION-USING-YOLO-V8",
      description:
        "Developed ML model using YOLOv8 for the detection of traffic violation detection",
    },
    {
      emoji: "🎗️",
      title: "Resume Builder",
      projectUrl: "https://github.com/ArjunSharma2808/IIT-JEE-AI-AGENTS",
      description:
        "AI Agents to create questions for JEE Advanced using GPT-4o",
    },
    {
      emoji: "⚽️",
      title: "PL-Prediction",
      projectUrl:
        "https://github.com/ArjunSharma2808/Medical-Information-Extraction-From-Clincal-Text",
      description: "This is a project regarding medical information extraction from clinical text using clinical text",
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
