import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Spacer,
} from "@chakra-ui/react";
import itb from "../asset/itb.png";
import kmpn from "../asset/kmpn.png";
import arrow from "../asset/arrow.png";
import ig from "../asset/ig.png";
import linkedin from "../asset/linkedin.png";
import twitter from "../asset/twitter.png";
import arrowdown from "../asset/arrowdown.png";
import dpa from "../asset/dpa.png";
import bpp from "../asset/bpp.png";
import sen from "../asset/kesenatoran.png";
import about from "../asset/about.png";

const MainBtn = () => {
  return (
    <Flex
      bg={"#2D83BA"}
      boxShadow={"inset 0px 3.48837px 3.48837px rgba(0, 0, 0, 0.25)"}
      borderRadius={20}
      justifyContent={"center"}
    >
      <Text
        fontFamily={"Open Sans, sans-serif"}
        fontWeight={800}
        fontSize={"2xl"}
        lineHeight={30}
        letterSpacing={"0.1em"}
        textShadow={"0px 2.35338px 25.8872px rgba(58, 58, 60, 0.2)"}
        color={"white"}
      >
        ABOUT
      </Text>
    </Flex>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box zIndex={4}>
      <Box
        pos={"fixed"}
        top={7}
        left={-7}
        borderRadius={"2xl"}
        bg={"white"}
        boxShadow={"4px 4px 15px #3A3A3C"}
        backdropFilter={"blur(25px)"}
        height={"3xs"}
        w={"16"}
        onClick={onOpen}
        cursor={"pointer"}
      ></Box>

      <Drawer placement={"left"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"none"} border={"none"} boxShadow={"none"}>
          <Flex
            height={"100vh"}
            pos={"fixed"}
            top={0}
            left={-7}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              borderRadius={33}
              bg={"white"}
              boxShadow={"4px 4px 15px #3A3A3C"}
              backdropFilter={"blur(25px)"}
              height={"95vh"}
              w={"xs"}
              p={7}
              pl={14}
              overflow={"auto"}
            >
              <Flex
                justifyContent={"flex-end"}
                onClick={onClose}
                cursor={"pointer"}
              >
                <Flex
                  borderRadius={"full"}
                  boxShadow={"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                  boxSize={35}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image src={arrow}></Image>
                </Flex>
              </Flex>

              <HStack alignItems={"center"} justifyContent={"center"}>
                <Image src={itb} boxSize={90} objectFit={"cover"}></Image>
                <Image src={kmpn} boxSize={90} objectFit={"cover"}></Image>
              </HStack>

              <Flex
                flexDir={"column"}
                fontWeight={600}
                fontSize={"xl"}
                mt={8}
                gap={5}
                px={4}
              >
                <HStack alignItems={"center"}>
                  <Image src={about} boxSize={6} objectFit={"contain"} />
                  <Text>About</Text>
                </HStack>
                <HStack alignItems={"center"}>
                  <Image src={dpa} boxSize={6} objectFit={"contain"} />
                  <Text>DPA</Text>
                  <Spacer />
                  <Image src={arrowdown} boxSize={3} objectFit={"contain"} />
                </HStack>
                <HStack alignItems={"center"}>
                  <Image src={bpp} boxSize={6} objectFit={"contain"} />
                  <Text>BPP</Text>
                  <Spacer />

                  <Image src={arrowdown} boxSize={3} objectFit={"contain"} />
                </HStack>
                <HStack alignItems={"center"}>
                  <Image src={sen} boxSize={6} objectFit={"contain"} />
                  <Text>Kesenatoran</Text>
                  <Spacer />

                  <Image src={arrowdown} boxSize={3} objectFit={"contain"} />
                </HStack>
              </Flex>

              <Box pos={"fixed"} bottom={10} right={12}>
                <Box
                  textAlign={"center"}
                  fontWeight={400}
                  fontSize={"lg"}
                  mt={5}
                >
                  <Text>Penerbangan Hati Kami</Text>
                  <Text mt={4}>KMPN Jiwa Kami</Text>
                </Box>

                <HStack
                  alignItems={"center"}
                  gap={5}
                  justifyContent={"center"}
                  mt={8}
                >
                  <Flex
                    boxShadow={"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                    boxSize={50}
                    borderRadius={15}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src={linkedin}></Image>
                  </Flex>
                  <Flex
                    boxShadow={"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                    boxSize={50}
                    borderRadius={15}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src={ig}></Image>
                  </Flex>
                  <Flex
                    boxShadow={"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}
                    boxSize={50}
                    borderRadius={15}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src={twitter}></Image>
                  </Flex>
                </HStack>
              </Box>
            </Box>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
