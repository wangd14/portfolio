import { Flex, Heading, Text } from "@radix-ui/themes";
import HoverLink from "@/components/HoverLink";

export default function Home() {
  return (
    <Flex>
      <Flex direction="column" gap="5" className="pt-7" maxWidth="512px">
        <Heading size="8" className="text-[var(--olive-12)]">
          welcome! i&apos;m david
        </Heading>
        <Text size="5" className="font-ibm-plex">
          I&apos;m a software engineer with an interest in AI and open source.
          I&apos;m currently interning at{" "}
          <HoverLink href="https://www.8451.com/">84.51°</HoverLink> in Chicago.
        </Text>
        <Text size="5" className="font-ibm-plex">
          Now, I&apos;m a junior at Rensselaer Polytechnic Insitute studying
          Computer Science and Information Technology Web Science. I enjoy
          contributing to open source, mainly through{" "}
          <HoverLink href="https://new.rcos.io/">
            Rensselaer Center for Open Source (RCOS)
          </HoverLink>
          .
        </Text>
        <Text size="5" className="font-ibm-plex">
          I&apos;m a previous intern at{" "}
          <HoverLink href="https://www.harpresearch.ai/">
            Harp Research
          </HoverLink>{" "}
          working on Viewpoint, an AI email automation tool.
        </Text>
        <Text size="5" className="font-ibm-plex">
          Check out a bit more about my experience or my <HoverLink href="/David_Wang_Resume.pdf">resume</HoverLink>.
        </Text>
      </Flex>
    </Flex>
  );
}
