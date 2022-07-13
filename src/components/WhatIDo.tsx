import { Flex, Text } from "@chakra-ui/react";
import { useWindowSize } from "../hooks/useWindowSize";
import techImg from "../assets/tech.png";
import { CheckCircleIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const WhatIDo = () => {
  const { width } = useWindowSize();
  return (
    <Flex 
      justify={"space-between"} 
      direction={width > 768 ? "row" : "column-reverse"}
      bg=" linear-gradient(to bottom,rgba(255,255,255,0),#d3e9ef);"
    >
      <Flex direction="column"  p="1rem">
        <Flex direction="column"  mx="1rem">
          <Text borderBottom="1px solid aqua" my="2rem">
            What i do
          </Text>
          <Flex alignItems={"center"}>
            <CheckCircleIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              CUSTOMIZE WEB, MOBILE & SOFTWARE SOLUTIONS
            </Text>
          </Flex>
          <Text>
            I create software paying great attention to each stage of the process to deliver a high-quality final product.
            The coding i write on is regarded to be elegant, modular,
            well-documented and responsive and i do it in a diverse array of stacks, platforms, and frameworks.
          </Text>
          <Flex alignItems={"center"}>
            <CheckCircleIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              SYSTEM INTEGRATION IS THE KEY TO SUCCESS
            </Text>
          </Flex>
          <Text>
            I build communication among systems,
            even when they are built on different technologies, 
            with flexible and reusable APIs.
          </Text>
          <Flex alignItems={"center"}>
            <CheckCircleIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              TECHNOLOGY CONSULTING
            </Text>
          </Flex>
          <Text>
            I perform in-depth analysis of your requirements. 
            It enables us to evaluate possible technology options, 
            propose them and find together the ideal solution to meet 
            your business needs.
          </Text>
        </Flex>
        <Flex direction="column"  mx="1rem">
          <Text borderBottom="1px solid aqua" my="2rem">
            Why me
          </Text>
          <Flex alignItems={"center"}>
            <ArrowRightIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              I have worked in many different industries solving all kinds of problems.
              I understand your business, i understand your industry, i will be there
              for you to help you grow.
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <ArrowRightIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              Tech specialist. Continuous learning.
              Wide range of traditional and innovative technology.
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <ArrowRightIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              I am known for always offering solutions that are both affordable and cutting edge.
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <ArrowRightIcon color="green.500"  mr="1rem"/>
            <Text my="1rem">
              Accountability, trust, respect are key to my culture.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex >
        <img src={techImg} alt="tech" />
      </Flex>
    </Flex>
  )
}