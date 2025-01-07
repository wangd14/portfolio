import React from "react";
import { Flex, Heading } from "@radix-ui/themes";
import ExperienceCard from "@/components/ExperienceCard";
import experiences from "@/data/experience";
import projects from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

const Experience = () => {
  return (
    <Flex className="pt-7" direction="column" gap="3">
      <Heading size="7" className="text-[var(--olive-12)]">
        Experience
      </Heading>
      {experiences.map((experience, id) => (
        <ExperienceCard
          icon={experience.icon}
          title={experience.title}
          description={experience.description}
          date={experience.date}
          href={experience.href}
          key={id}
        />
      ))}
      <Heading size="7" className="text-[var(--olive-12)]" id="projects">
        Projects
      </Heading>
      {projects.map((project, id) => (
        <ProjectCard
          title={project.title}
          description={project.description}
          link={project.link}
          linkText={project.linkText}
          icon={project.icon}
          key={id}
        />
      ))}
    </Flex>
  );
};

export default Experience;
