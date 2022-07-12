import { Flex } from "@chakra-ui/react";
import { AboutMe } from "../components/AboutMe";
import { Partners } from "../components/Partners";

export const Home = () => {
  return (
    <Flex direction="column">
      <AboutMe />
      <Partners />
    </Flex>
  );
}