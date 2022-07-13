import { Flex, Heading, Text } from "@chakra-ui/react";
import { useWindowSize } from "../hooks/useWindowSize";

export const HowIWork = () => {
  const { width } = useWindowSize();
  return (
    <Flex p="1rem" bg="#d3e9ef" justify={"center"} direction={"column"} alignItems={"center"} >
      <Heading mb="2rem">How I work!</Heading>
      <Flex direction={width > 768 ? "row" : "column"} >
        <Flex 
          direction={"column"} 
          bg="whiteAlpha.600" 
          w="15rem" h="20rem" p="1rem" m="1rem" 
          alignItems={"center"} 
          borderRadius={"1rem"}
        >
          <Flex bg="white" borderRadius={"50%"} w="3rem" h="3rem" justify={"center"}>
            <Heading>1</Heading>
          </Flex>
          <Flex direction={"column"} textAlign={"center"}>
            <Heading size={"md"} my="1rem">Getting into it</Heading>
            <Text>
              I organize our first meeting where you tell me your needs and the characteristics 
              you want your system to have, in this way ,i can tabulate a quote. 
              The process will start once the quote is accepted.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={"column"} 
          bg="whiteAlpha.600" 
          w="15rem" h="20rem" p="1rem" m="1rem" 
          alignItems={"center"} 
          borderRadius={"1rem"}
        >
          <Flex bg="white" borderRadius={"50%"} w="3rem" h="3rem" justify={"center"}>
            <Heading>2</Heading>
          </Flex>
          <Flex direction={"column"} textAlign={"center"}>
            <Heading size={"md"} my="1rem">Detailed quotation</Heading>
            <Text>
              At this point, i provide you with a detailed service quote
              according to the agreements from the previous meeting.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={"column"} 
          bg="whiteAlpha.600" 
          w="15rem" h="20rem" p="1rem" m="1rem" 
          alignItems={"center"} 
          borderRadius={"1rem"}
        >
          <Flex bg="white" borderRadius={"50%"} w="3rem" h="3rem" justify={"center"}>
            <Heading>3</Heading>
          </Flex>
          <Flex direction={"column"} textAlign={"center"}>
            <Heading size={"md"} my="1rem">Demo Meeting</Heading>
            <Text>
              The application is developed according to the customer's agreement and needs; 
              there will be a meeting to present the DEMO and gather feedback from the client.
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={"column"} 
          bg="whiteAlpha.600" 
          w="15rem" h="20rem" p="1rem" m="1rem" 
          alignItems={"center"} 
          borderRadius={"1rem"}
        >
          <Flex bg="white" borderRadius={"50%"} w="3rem" h="3rem" justify={"center"}>
            <Heading>4</Heading>
          </Flex>
          <Flex direction={"column"} textAlign={"center"}>
            <Heading size={"md"} my="1rem">Product delivery</Heading>
            <Text>
              Once completed, the product will be delivered on the platform previously 
              agreed on together with the feedback from the previous meeting.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Heading mb="2rem" textAlign={"center"}>Ready to build your software?</Heading>
    </Flex>
  )
}