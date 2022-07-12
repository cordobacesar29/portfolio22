import { Flex, Heading, Text } from "@chakra-ui/react";
import { useWindowSize } from "../hooks/useWindowSize";
import img2 from "../assets/home2.png";

export const AboutMe = () => {
  const { width } = useWindowSize();
  return (
    <Flex 
      w={width} maxWidth="1270px" 
      justifyContent="space-between"
      alignItems="center"
      direction={width > 768 ? "row" : "column"}
      bg=" linear-gradient(to bottom,rgba(255,255,255,0),#d3e9ef);"
    >
      <Flex className="img-profile" width="100%">
        <img src={img2} alt="fondo"/>
      </Flex>
      <Flex
        w="100%"
        direction="column"
      >
        <Text margin="2rem" borderBottom="1px solid aqua">ABOUT ME</Text>
        <Flex direction="column" mb="1rem" px="2rem">
          <Heading mb="1rem">What Move Me</Heading>
          <Text>
            I believe that digitalization helps the evolution of the world,
            and integrates people and companies, making their development easier.
          </Text>
          <Text>
            In everything that i do, i bet for innovation and i do it 
            through careful integration of human resources and technology.
          </Text>
        </Flex>
        <Flex direction="column" mb="1rem"  px="2rem">
          <Heading mb="1rem">Value Proposal</Heading>
          <Text>
            My approach is based on careful digitalization
            processes that turn into technological solutions
            for all kind of companies.
          </Text>
          <Text>
            I co-create, alongside with my clients, high-quality software products,
            to address the digital transformation, focusing on design and usability.
          </Text>
        </Flex>
        <Flex direction="column" mb="1rem"  px="2rem">
          <Heading mb="1rem">My Work</Heading>
          <Text>
            I develop digital products and services,
            focused on the users’ best experience.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}