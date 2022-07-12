import { Flex, Text } from "@chakra-ui/react";
import hand from "../assets/tap.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import { useWindowSize } from "../hooks/useWindowSize";

export const Footer = () => {
  const { width } = useWindowSize();
  return (
    <Flex bg="linear-gradient(180deg, #d3e9ef 0%, white 100%);" justify="space-around" p="1rem" direction={width > 768 ? "row" : "column"}>
      <Flex direction="column" textAlign="center">
        <Text>© 2022 Copyright César Córdoba, All rights reserved.</Text>
        <Text>Buenos Aires, Argentina.</Text>
        <Text></Text>
      </Flex>
      <Flex direction="column" align="center">
        <Flex justify="center">
          <Text textDecoration="underline" mr="1rem">CONTACT</Text>
          <img src={hand} alt="hand" width="20px" height="20px" />
        </Flex>
        <Flex m="1rem" justify="space-between" w="10rem">
          <a href="https://www.instagram.com/cordobacesar29/" target="blank" >
            <img src={instagram} alt="instagram" width="30px" height="30px" />
          </a>
          <a href="https://www.linkedin.com/in/cordobacesar29/" target="blank" >
            <img src={linkedin} alt="linkedin" width="30px" height="30px" />
          </a>
          <a href="https://github.com/cordobacesar29" target="blank" >
            <img src={github} alt="github" width="30px" height="30px" />
          </a>
          <a href="mailto:cordobacesar29@gmail.com">
            <img src={gmail} alt="gmail" width="30px" height="30px" />
          </a>
        </Flex>
      </Flex>
    </Flex>
  ) 
}