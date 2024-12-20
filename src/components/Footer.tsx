import React from "react";
import { Flex, Link } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaAt } from "react-icons/fa6";

const Links = () => {
  return (
    <Flex gap="3">
      <Link href="mailto:wangd14@rpi.edu">
        <Flex
          direction="row"
          gap="1"
          align="center"
          className="text-[#1A211E] hover:underline"
        >
          <FaAt />
          wangd14@rpi.edu
        </Flex>
      </Link>
      <Link href="https://github.com/wangd14">
        <Flex
          direction="row"
          gap="1"
          align="center"
          className="text-[#1A211E] hover:underline"
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
          className="text-[#1A211E] hover:underline"
        >
          <LinkedInLogoIcon />
          /dw4
        </Flex>
      </Link>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Flex justify="center" className="py-5">
      <Links />
    </Flex>
  );
};

export default Footer;
