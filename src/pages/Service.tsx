import { Flex, Heading } from "@chakra-ui/react";
import { useWindowSize } from "../hooks/useWindowSize";


export const Service = () => {
  const { width } = useWindowSize();
  return (
    <Flex
      w={width} maxWidth="1440px" 
      justifyContent="space-between"
      alignItems="center"
      direction={width > 768 ? "row" : "column"}
      bg=" linear-gradient(to bottom,rgba(255,255,255,0),#d3e9ef);"
    >
      <Flex>
        <h1>SERVICES</h1>

      </Flex>
    </Flex>
  );
}