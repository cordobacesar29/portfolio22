
import {
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Flex, 
  Heading, 
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useWindowSize } from "../hooks/useWindowSize";
import { Link } from "react-router-dom";

export const Header = () => {
  const { width } = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    width > 768 ? (
    <Flex justify={"space-between"}>
      <Heading m="1rem">César Córdoba</Heading>
      <Flex m="1rem">
        <Link to="/">
          <Button mx={"1rem"}>Home</Button>
        </Link>
        <Link to="/services">
          <Button mx={"1rem"}>Services</Button>
        </Link>
      </Flex>
    </Flex>
    ) : (
      <>
        <IconButton 
          colorScheme="teal" 
          onClick={onOpen} 
          aria-label={"Open"}
          icon={<HamburgerIcon />}
          m="1rem"
          >
          Open
        </IconButton>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottom="1px solid aqua">César Córdoba</DrawerHeader>
            <DrawerBody>
                  <Flex direction={"column"} align="center">
                    <Button 
                      w={"5rem"}
                      mb={"1rem"}
                      variant='link'
                      onClick={()=> setTimeout(() => {
                        onClose();
                      }, 100)}
                    >
                      <Link to="/">Home</Link>
                    </Button>
                    <Button 
                      w={"5rem"}
                      mb={"1rem"}
                      variant='link'
                      onClick={()=> setTimeout(() => {
                        onClose();
                      }, 100)}
                    >
                      <Link to="services">Services</Link>
                    </Button>
                  </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  );
}