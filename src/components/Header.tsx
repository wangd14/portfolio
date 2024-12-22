import React from "react";
import Link from "next/link";
import { Flex, Container } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
const Links = () => {
  return (
    <Flex direction="row" gap="3" align="end" className=" hidden sm:flex">
      <Link href="https://github.com/wangd14">
        <Flex
          direction="row"
          gap="1"
          align="center"
          className="hover:underline"
        >
          <GitHubLogoIcon />
          /wangd14
        </Flex>
      </Link>
      <Link href="https://www.linkedin.com/in/dw5/">
        <Flex
          direction="row"
          gap="1"
          align="center"
          className="hover:underline"
        >
          <LinkedInLogoIcon />
          /in/dw5
        </Flex>
      </Link>
    </Flex>
  );
};

const Navigation = () => {
  return (
    <Flex direction="row" gap="5" gapY="2" align="end" wrap="wrap">
      <Link href="/" className="text-xl align-bottom font-bold hover:underline">
        david wang
      </Link>
      <Flex direction="row" gap="5" gapY="1" align="end" wrap="wrap">
        <Link href="/exp" className="align-bottom hover:underline">
          experience
        </Link>
        <Link href="/exp#projects" className="align-bottom hover:underline">
          projects
        </Link>
        <Link href="/contact" className="align-bottom hover:underline">
          contact
        </Link>
      </Flex>
    </Flex>
  );
};

const Header = () => {
  return (
    <Container
      px="20"
      size="3"
      className="text-[#5F6563] hover:text-[#1A211E] duration-500"
    >
      <Flex
        direction="row"
        justify="between"
        maxWidth="1250px"
        my="6"
        align="center"
        // color="gray.500"
        // _hover={{ color: "gray.800" }}
        // transition="color 0.5s ease-in-out"
      >
        <Navigation />
        <Links />
      </Flex>
    </Container>
  );
};

export default Header;
