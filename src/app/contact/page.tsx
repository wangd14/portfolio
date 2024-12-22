import React from "react";
import { Flex, Text, Box } from "@radix-ui/themes";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Contact = () => {
  return (
    <Flex direction="column" gap="5" className="pt-7" maxWidth="512px">
      <Text size="5" className="font-ibm-plex">
        The best way to contact me is to email me at wangd14@rpi.edu. I&apos;m
        pretty responsive.
      </Text>
      <Box>
        <Text size="5" className="font-ibm-plex">
          Here are some of my other socials:
        </Text>
        <ul className="list-disc">
          <li className="flex items-center before:text-2xl before:content-['•'] before:w-4">
            <Link href="https://github.com/wangd14">
              <Text size="3" className="font-ibm-plex">
                <Flex
                  direction="row"
                  gap="1"
                  align="center"
                  className="hover:underline"
                >
                  <GitHubLogoIcon />
                  /wangd14
                </Flex>
              </Text>
            </Link>
          </li>
          <li className="flex items-center before:text-2xl before:content-['•'] before:w-4">
            <Link href="https://www.linkedin.com/in/dw5/">
              <Text size="3" className="font-ibm-plex">
                <Flex
                  direction="row"
                  gap="1"
                  align="center"
                  className="hover:underline"
                >
                  <LinkedInLogoIcon />
                  /in/dw5
                </Flex>
              </Text>
            </Link>
          </li>
        </ul>
      </Box>
      <Text size="5" className="font-ibm-plex">
        If you want to work on something with me or have any questions, feel
        free to reach out!
      </Text>
    </Flex>
  );
};

export default Contact;
