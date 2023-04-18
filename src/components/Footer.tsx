import {
  Box,
  Text,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Spacer,
  Show,
  Hide,
} from "@chakra-ui/react";

import igblack from "../asset/igblack.svg";
import linkedinblack from "../asset/linkedinblack.svg";
import twitterblack from "../asset/twitterblack.svg";
import igwhite from "../asset/igwhite.svg";
import linkedinwhite from "../asset/linkedinwhite.svg";
import twitterwhite from "../asset/twitterwhite.svg";

import bagas from "../asset/behindWeb/bagas.png";
import elsa from "../asset/behindWeb/elsa.png";
import adil from "../asset/behindWeb/adil.png";
import aping from "../asset/behindWeb/aping.png";

import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Footer = ({ senator }: { senator?: boolean }) => {
  const {
    isOpen: isOpenBehind,
    onOpen: onOpenBehind,
    onClose: onCloseBehind,
  } = useDisclosure();

  return (
    <Flex
      bgColor={senator ? "#2980B9" : "transparent"}
      color={senator ? "#E6E7E8" : "inherit"}
      w={"full"}
      p={10}
      letterSpacing={"0.1em"}
      fontWeight={400}
      fontSize={{ base: "xl", lg: "lg" }}
      flexDir={{ sm: "column", lg: "row" }}
      gap={{ sm: 4, lg: 0 }}
      alignItems={{ sm: "center", lg: "normal" }}
    >
      <Flex alignItems={"center"} gap={5}>
        <Image
          src={senator ? twitterwhite : twitterblack}
          onClick={() => window.open("https://twitter.com/KMPN_ITB", "_blank")}
          cursor="pointer"
        />
        <Image
          src={senator ? linkedinwhite : linkedinblack}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/keluarga-mahasiswa-teknik-penerbangan-itb/mycompany/",
              "_blank"
            )
          }
          cursor="pointer"
        />
        <Image
          src={senator ? igwhite : igblack}
          onClick={() =>
            window.open("https://www.instagram.com/kmpn_itb/", "_blank")
          }
          cursor="pointer"
        />
        <Text>FOLLOW US!</Text>
      </Flex>
      <Spacer />
      <Flex alignItems={"center"} cursor={"pointer"} onClick={onOpenBehind}>
        <MotionText
          initial={{ fontWeight: 400 }}
          whileHover={{ fontWeight: 600 }}
        >
          BEHIND THIS WEBSITE
        </MotionText>
      </Flex>

      <Modal
        isOpen={isOpenBehind}
        onClose={onCloseBehind}
        size={{ sm: "sm", lg: "6xl" }}
      >
        <ModalOverlay />
        <ModalContent
          bg={"#2980B9"}
          boxShadow={"11px 11px 30px 5px rgba(0, 0, 0, 0.25)"}
          p={20}
          color={"#fff"}
          borderRadius={50}
        >
          <ModalCloseButton size={"lg"} top={10} right={10} />
          <Show above="lg">
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                textAlign={"center"}
                fontSize={"2xl"}
                fontWeight={600}
                letterSpacing={"0.1em"}
              >
                BEHIND THIS WEBSITE
              </Text>
              <Flex mt={10} gap={15}>
                <Flex
                  flexDir={"column"}
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={10}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                  textAlign={"center"}
                >
                  <Text fontWeight={700}>UI/UX DESIGNER</Text>
                  <Image src={elsa} boxSize={150} />
                  <Text fontWeight={600}>
                    Elsa <br /> <span style={{ fontWeight: 400 }}>AE'19</span>
                  </Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={10}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                  textAlign={"center"}
                >
                  <Text fontWeight={700}>WEBSITE DEVELOPER</Text>
                  <Image src={bagas} boxSize={150} />
                  <Text fontWeight={600}>
                    Bagas <br /> <span style={{ fontWeight: 400 }}>AE'20</span>
                  </Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={10}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                  textAlign={"center"}
                >
                  <Text fontWeight={700}>UI/UX DESIGNER</Text>
                  <Image src={aping} boxSize={150} />
                  <Text fontWeight={600}>
                    Aping <br /> <span style={{ fontWeight: 400 }}>AE'20</span>
                  </Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={10}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                  textAlign={"center"}
                >
                  <Text fontWeight={700}>UI/UX DESIGNER</Text>
                  <Image src={adil} boxSize={150} />
                  <Text fontWeight={600}>
                    Adillah <br />{" "}
                    <span style={{ fontWeight: 400 }}>AE'21</span>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Show>
          <Hide above="lg">
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                textAlign={"center"}
                fontSize={"2xl"}
                fontWeight={600}
                letterSpacing={"0.1em"}
              >
                BEHIND THIS WEBSITE
              </Text>
              <Flex mt={10} gap={5} flexDir={"column"}>
                <Flex
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={7}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                >
                  <Box
                    boxSize={75}
                    border={"1px solid #000000"}
                    bg={"#D9D9D9"}
                    borderRadius={"full"}
                  />
                  <Flex flexDir={"column"}>
                    <Text fontWeight={700}>POSISI</Text>
                    <Text>Nama</Text>
                  </Flex>
                </Flex>
                <Flex
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={7}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                >
                  <Box
                    boxSize={75}
                    border={"1px solid #000000"}
                    bg={"#D9D9D9"}
                    borderRadius={"full"}
                  />
                  <Flex flexDir={"column"}>
                    <Text fontWeight={700}>POSISI</Text>
                    <Text>Nama</Text>
                  </Flex>
                </Flex>
                <Flex
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={7}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                >
                  <Box
                    boxSize={75}
                    border={"1px solid #000000"}
                    bg={"#D9D9D9"}
                    borderRadius={"full"}
                  />
                  <Flex flexDir={"column"}>
                    <Text fontWeight={700}>POSISI</Text>
                    <Text>Nama</Text>
                  </Flex>
                </Flex>
                <Flex
                  borderRadius={50}
                  bg={"#D9D9D9"}
                  p={7}
                  color={"#000"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                  fontWeight={600}
                  letterSpacing={"0.1em"}
                  gap={10}
                >
                  <Box
                    boxSize={75}
                    border={"1px solid #000000"}
                    bg={"#D9D9D9"}
                    borderRadius={"full"}
                  />
                  <Flex flexDir={"column"}>
                    <Text fontWeight={700}>POSISI</Text>
                    <Text>Nama</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Hide>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Footer;
