import React from "react";
import { Box, Heading, Text, Flex, Link } from "@radix-ui/themes";
import Image from "next/image";
import { Project } from "@/data/interface";

const ProjectCard = (props: Project) => {
  return (
    <Flex className="w-full" gap="2" align="center">
      <Box className="relative h-16 w-16 flex-shrink-0">
        <Image
          src={props.icon}
          fill
          alt={props.title + " Logo"}
          className="object-contain"
        />
      </Box>
      <Box className="flex-grow">
        <Flex justify="between">
          <Heading size="4">{props.title}</Heading>
        </Flex>
        <Text as="div">{props.description}</Text>
        <Link>{props.link}</Link>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
