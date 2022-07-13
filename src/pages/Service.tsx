import { Flex, Heading, Text } from "@chakra-ui/react";
import { useWindowSize } from "../hooks/useWindowSize";
import { WhatIDo } from "../components/WhatIDo";
import { HowIWork } from "../components/HowIWork";

export const Service = () => {
  const { width } = useWindowSize();
  return (
    <Flex>
      <Flex 
        direction="column"
      >
        <Heading fontWeight="bold" m="1rem" size={width > 768 ? "3xl" : "lg"} mb="3rem" alignSelf={"center"}>
          Work with the top talent
        </Heading>
        <WhatIDo />
        <HowIWork />
      </Flex>
    </Flex>
  );
}