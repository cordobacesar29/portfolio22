import { useRef } from "react";
import {
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  Flex, 
  Heading, 
  Input, 
  useDisclosure,
  IconButton,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useWindowSize } from "../hooks/useWindowSize";
import { Link } from "react-router-dom";

export const Header = () => {
  const { width } = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    width > 768 ? (
    <Flex>
      <Heading m="1rem">César Córdoba</Heading>
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
                <nav>
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
                </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  );
}