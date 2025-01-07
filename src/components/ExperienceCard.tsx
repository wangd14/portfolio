import React from "react";
import { Box, Heading, Text, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { Experience } from "@/data/interface";
import HoverLink from "./HoverLink";

const ExperienceCard = (props: Experience) => {
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
          {props.href ? (
            <HoverLink href={props.href}>
              <Heading size="4">{props.title}</Heading>
            </HoverLink>
          ) : (
            <Heading size="4">{props.title}</Heading>
          )}
          <Text>{props.date}</Text>
        </Flex>
        <Text as="div">{props.description}</Text>
      </Box>
    </Flex>
  );
};

export default ExperienceCard;
