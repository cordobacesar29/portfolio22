import { Flex, Heading, Text } from "@chakra-ui/react";
import { useWindowSize } from "../hooks/useWindowSize";
import img1 from "../assets/home1.png";
import solutionImg from "../assets/4iSolutions.png";
import atyggImg from "../assets/atygg_blue_logo.png";
import touchImg from "../assets/touch_of_tech.png";
import scaleImg from "../assets/scale.jpg";
import synagroImg from "../assets/synagro.svg";
import caixaImg from "../assets/caixa.png";
import tecnoImg from "../assets/tecno.png";

export const Partners = () => {
  const { width } = useWindowSize();
  return (
    <Flex 
      justifyContent="space-between"
      alignItems="center"
      direction={width > 768 ? "row" : "column-reverse"}
      backgroundColor="#d3e9ef"
    >
      <Flex direction="column">
        <Flex
          w="100%"
          direction="column"
        >
          <Text margin="2rem" borderBottom="1px solid aqua">COMPANIES THAT TRUSTED MY WORK</Text>
          <Flex direction="column" mb="1rem" px="2rem">
            <Flex direction={width > 768 ? "row" : "column"}>
              <Flex width="100%" justify="center" mb="1rem">
                <a href="https://atygg.com/" target="blank">
                  <img src={atyggImg} alt="atygg" />
                </a>
              </Flex>
              <Flex width="100%" mb="1rem">
                <a href="https://www.touchof.tech/" target="blank">
                  <img src={touchImg} alt="touch"/>
                </a>
              </Flex>
            </Flex>
            <Flex direction={width > 768 ? "row" : "column"}>
              <Flex width="100%" mb="1rem">
                <a href="https://4isolutions.com.ar/" target="blank">
                  <img src={solutionImg} alt="4iSolution" />
                </a>
              </Flex>
              <Flex width="100%" mb="1rem" justify="center" alignItems="center">
                <a href="https://scale.com/" target="blank">
                  <Flex>
                    <img src={scaleImg} alt="scale" width="60px" height="60px"/>
                    <Heading textColor="white" m=".5rem">Scale AI</Heading>
                  </Flex>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w="100%"
          direction="column"
        >
          <Text margin="2rem" borderBottom="1px solid aqua">SOME OF MY WORK DONE</Text>
          <Flex direction="column" mb="1rem" px="2rem">
            <Flex direction={width > 768 ? "row" : "column"} mb="1rem">
              <Flex width="100%" mb="1rem" justify="center" alignItems="center">
                <a href="https://synagroweb.com/" target="blank">
                    <img src={synagroImg} alt="scale" width="220px" height="120px"/>
                </a>
              </Flex>
              <Flex width="100%" mb="1rem" justify="center">
                <a href="https://www.caixabank.es/particular/home/particulares_es.html" target="blank">
                  <img src={caixaImg} alt="caixa bank" width="220px" height="120px"/>
                </a>
              </Flex>
              <Flex width="100%" justify="center">
                <a href="https://tecnocompro.com/" target="blank">
                  <img src={tecnoImg} alt="tecno compro" width="220px" height="120px"/>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex width="100%">
        <img src={img1} alt="fondo"/>
      </Flex>
    </Flex>
  );
}