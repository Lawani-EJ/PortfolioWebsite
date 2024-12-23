import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Todo-WebApplication",
      description:
        "Users can add, delete, and rearrange tasks, making it easy to organize and manage daily activities effectively.",
      tags: ["React", "Eventhandling","StateManagement"],
      link: "https://github.com/Lawani-EJ/Todo-WebApplication",
    },
    {
      title: "COVID-19-Dashboard",
      description:
        "Covid-19 Dashboard made with Vite+React",
      tags: ["Chartjs", "APIintegration", "React", "Vite"],
      link: "https://github.com/Lawani-EJ/COVID-19-Dashboard",
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        `Rock, Paper, Scissors is a two-player game where each round both players simultaneously choose a move.`,
      tags: ["Javascript", "dom-manipulation", "Functions"],
      link: "https://github.com/Lawani-EJ/Rock-Paper-Scissors",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
