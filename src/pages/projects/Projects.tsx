import ProjectCard from "./ProjectCard";

const Projects = () => {
  const details = [
    {
      emoji: "🌐",
      title: "My-Hacker-News",
      projectUrl: "https://github.com/ArjunSharma2808/My-Hacker_News",
      description: "Developed Hackernews server clone",
    },
    {
      emoji: "⛑️",
      title: "TRAFFIC-VIOLATION-DETECTION-USING-YOLO-V8",
      projectUrl: "https://github.com/ArjunSharma2808/TRAFFIC-VIOLATION-DETECTION-USING-YOLO-V8",
      description:
        "Developed ML model using YOLOv8 for the detection of traffic violation detection",
    },
    {
      emoji: "🎗️",
      title: "IIT-JEE-AI-AGENTS",
      projectUrl: "https://github.com/ArjunSharma2808/IIT-JEE-AI-AGENTS",
      description:
        "AI Agents to create questions for JEE Advanced using GPT-4o",
    },
    {
      emoji: "🩺",
      title: "Medical-Information-Extraction-From-Clincal-Text",
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
