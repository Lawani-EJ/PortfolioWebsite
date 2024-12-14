import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";

const Page = () => {
  const hobbies = [
    { hobby: "Coding" },
    { hobby: "Playing Games" },
    { hobby: "Watching Anime" },
    { hobby: "Tech Blog Writing" },
    { hobby: "Creating Cool Projects" },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      {/* Badge Section */}
      <Badge className="gap-2">
        <User2 className="h-5 w-5" />
        About Me
      </Badge>

      {/* About Section */}
      <div className="flex flex-col gap-3">
        <Heading>
          Software Engineer and Web <br /> Developer, Based in Nigeria
        </Heading>
        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            I am a Full Stack Web Developer from Abuja F.C.T, Nigeria. I love
            crafting cool web projects and contributing to open source. As a
            student at Babcock University, I've built a strong foundation in
            HTML, CSS, and JavaScript. With a keen eye for detail and a
            commitment to delivery speed, I excel at creating seamless and
            responsive interfaces that leave a lasting impression.
          </p>
        </FramerWrapper>
      </div>

      {/* Footer Section */}
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col"
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>

      {/* Hobbies Section */}
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start"
            >
              <Circle className="h-3 w-3" /> {item.hobby}
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default Page;
