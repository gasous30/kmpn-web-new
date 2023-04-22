import {
  Box,
  Divider,
  Flex,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import glider from "../../asset/glider.svg";
import header1 from "../../asset/header/bpp.png";
import bgSh from "../../asset/bg/stakeholder.png";
import bgProg from "../../asset/bg/bpp_prog.png";
import bgDok from "../../asset/bg/bpp_dokum.png";

import leftArrowDouble from "../../asset/leftdouble.svg";
import rightArrowDouble from "../../asset/rightdouble.svg";
import leftArrow from "../../asset/leftArrow.svg";
import rightArrow from "../../asset/rightArrow.svg";

import dokum_photo from "./dokum_photo";

import kudticon from "../../asset/kudt_icon.png";
import aisicon from "../../asset/AIS.png";
import roadmapicon from "../../asset/Roadmap.png";

import stakeholder_data from "./stakeholder_data";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stakeholder = ({
  data_input,
}: {
  data_input: { title: string; name: string; img: any }[];
}) => {
  const chunksize = 4;
  let sh_edited: any = [];
  for (let i = 0; i < data_input.length; i += chunksize) {
    const chunk = data_input.slice(i, i + chunksize);
    sh_edited.push(chunk);
  }
  return (
    <>
      {sh_edited.map((data: any) => {
        return (
          <Flex py={10} w={"full"}>
            {data.map((el: any, id: any) => {
              return (
                <>
                  <Flex flexDir={"column"}>
                    <Image src={el.img} w={300} />
                    {/* <Box boxSize={300} bgColor={"white"}></Box> */}
                    <Text
                      color={"white"}
                      fontWeight={800}
                      fontSize={"xl"}
                      textTransform={"uppercase"}
                      letterSpacing={"0.1em"}
                      mt={3}
                    >
                      {el.title}
                    </Text>
                    <Text
                      color={"white"}
                      fontWeight={400}
                      fontSize={"lg"}
                      textTransform={"uppercase"}
                      letterSpacing={"0.1em"}
                    >
                      {el.name}
                    </Text>
                  </Flex>
                  {id === data.length - 1 ? null : <Spacer />}
                </>
              );
            })}
          </Flex>
        );
      })}
    </>
  );
};
const BPP = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateModal, setStateModal] = useState("");
  const [stateDok, setStateDok] = useState(0);
  const nav = useNavigate();

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const dokum_photo_s = shuffleArray(dokum_photo);

  const ModalCont = ({ type }: { type: string }) => {
    const BodyVisi = () => {
      return (
        <ModalBody>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            h={"full"}
            w={"full"}
            // p={{ sm: 3, md: 10 }}
            px={40}
            flexDir={"column"}
            gap={5}
          >
            <Text
              fontSize={{ sm: "4xl", lg: "5xl" }}
              fontWeight={800}
              letterSpacing={"0.1em"}
              textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
            >
              VISI
            </Text>

            <Text
              fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
              textAlign={"justify"}
              fontWeight={200}
            >
              Menghadirkan KMPN sebagai tombak terdepan untuk membangkitkan
              pergerakan dalam upaya eskalasi KMPN yang lebih berkualitas dan
              dibutuhkan oleh orang-orang di dalamnya
            </Text>
          </Flex>
        </ModalBody>
      );
    };

    const BodyMisi = () => {
      const [statePage, setPage] = useState(0);
      const page_data = [
        {
          id: 1,
          content:
            "Mengeskalasi kualitas kebutuhan dasar dan pengembangan diri setiap mahasiswa teknik dirgantara secara menyeluruh",
        },
        {
          id: 2,
          content:
            "Mengeskalasi manifestasi ilmu kedirgantaraan dengan melakukan inisiasi wadah pengembangan karya dan inovasi yang lebih nyata dan berkualitas",
        },
        {
          id: 3,
          content:
            "Mengeskalasi potensi kolaborasi serta memelihara hubungan yang baik dan profesional dengan pihak di luar KMPN berlandaskann prinsip keabermanfaatan bagi pihak-pihak yang terlibat didalamnya",
        },
        {
          id: 4,
          content:
            "Mengeskalasi kualitas setiap instrumen yang ada di KMPN dengan memperhatikan kebutuhan dan kapabilitas anggotanya KMPN sebagai tombak terdepan untuk membangkitkan pergerakan dalam upaya eskalasi KMPN yang lebih berkualitas dan dibutuhkan oleh orang-orang di dalamnya",
        },
      ];
      return (
        <>
          <ModalBody>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h={"full"}
              w={"full"}
              // p={{ sm: 3, md: 10 }}
              px={40}
              flexDir={"column"}
              gap={5}
            >
              <Text
                fontSize={{ sm: "4xl", lg: "5xl" }}
                fontWeight={800}
                letterSpacing={"0.1em"}
                textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
              >
                MISI {statePage + 1}
              </Text>

              <Text
                fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
                textAlign={"justify"}
                fontWeight={200}
              >
                {page_data[statePage].content}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
              <Flex
                bg={" #E6E7E8"}
                boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
                boxSize={35}
                borderRadius={"full"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
                onClick={() => {
                  statePage <= 0 ? setPage(0) : setPage(statePage - 1);
                }}
              >
                <Image src={leftArrow} boxSize={15} />
              </Flex>
              <Flex gap={3}>
                <Box
                  bg={statePage === 0 ? "#1C5579" : "#E6E7E8"}
                  boxShadow={
                    "inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"
                  }
                  boxSize={15}
                  borderRadius={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                />
                <Box
                  bg={statePage === 1 ? "#1C5579" : "#E6E7E8"}
                  boxShadow={
                    "inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"
                  }
                  boxSize={15}
                  borderRadius={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                />
                <Box
                  bg={statePage === 2 ? "#1C5579" : "#E6E7E8"}
                  boxShadow={
                    "inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"
                  }
                  boxSize={15}
                  borderRadius={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                />
                <Box
                  bg={statePage === 3 ? "#1C5579" : "#E6E7E8"}
                  boxShadow={
                    "inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"
                  }
                  boxSize={15}
                  borderRadius={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                />
              </Flex>
              <Flex
                bg={" #E6E7E8"}
                boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
                boxSize={35}
                borderRadius={"full"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
                onClick={() => {
                  statePage >= 3 ? setPage(3) : setPage(statePage + 1);
                }}
              >
                <Image src={rightArrow} boxSize={15} />
              </Flex>
            </Flex>
          </ModalFooter>
        </>
      );
    };

    const BodyRoadmap = () => {
      const [statePage, setPage] = useState(0);
      return (
        <>
          <ModalBody>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h={"full"}
              w={"full"}
              // p={{ sm: 3, md: 10 }}
              px={40}
              flexDir={"column"}
              gap={5}
            >
              <Text
                fontSize={{ sm: "4xl", lg: "5xl" }}
                fontWeight={800}
                letterSpacing={"0.1em"}
                textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
              >
                ROADMAP
              </Text>
              {statePage === 0 ? (
                <Text
                  fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
                  textAlign={"justify"}
                  fontWeight={200}
                >
                  Membuat & menyampaikan peta pengembangan diri anggota secara
                  personal, serta melakukan pengecekan berkala terhadap
                  ketercapaian peta pengembangan diri anggota.
                </Text>
              ) : (
                <Text
                  fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
                  textAlign={"justify"}
                  fontWeight={200}
                >
                  Roadmap dilaksanakan dengan 3 tahap/ 3 proker:
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <OrderedList>
                      <ListItem>Survey & Data Gathering</ListItem>
                      <ListItem>Roadmap Launching #1 #2 #3</ListItem>
                      <ListItem>Update & Evaluasi</ListItem>
                    </OrderedList>
                  </Flex>
                </Text>
              )}
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
              <Flex
                bg={" #E6E7E8"}
                boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
                boxSize={35}
                borderRadius={"full"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
                onClick={() => setPage(0)}
              >
                <Image src={leftArrow} boxSize={15} />
              </Flex>
              <Flex gap={3}>
                <Box
                  bg={statePage === 0 ? "#1C5579" : "#E6E7E8"}
                  boxShadow={
                    "inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"
                  }
                  boxSize={15}
                  borderRadius={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                />
                <Box
                  bg={statePage === 1 ? "#1C5579" : "#E6E7E8"}
                  boxShadow={
                    "inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"
                  }
                  boxSize={15}
                  borderRadius={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                />
              </Flex>
              <Flex
                bg={" #E6E7E8"}
                boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
                boxSize={35}
                borderRadius={"full"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
                onClick={() => setPage(1)}
              >
                <Image src={rightArrow} boxSize={15} />
              </Flex>
            </Flex>
          </ModalFooter>
        </>
      );
    };

    return (
      <ModalContent
        bg={"#2D83BA"}
        color={"white"}
        borderRadius={30}
        p={7}
        h={{ sm: "2xl", md: "xl", lg: "lg" }}
        boxShadow={"inset 11px 11px 30px 5px rgba(0, 0, 0, 0.25)"}
      >
        <ModalCloseButton size={"lg"} />
        {type === "visi" ? (
          <BodyVisi />
        ) : type === "misi" ? (
          <BodyMisi />
        ) : (
          <BodyRoadmap />
        )}
      </ModalContent>
    );
  };

  return (
    <Box w={"full"}>
      <Box w={"full"}>
        <Box
          w={"full"}
          height={"2xl"}
          bg={`url(${header1})`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        />
      </Box>

      <Flex
        flexDir={"column"}
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={100}
      >
        <Text
          fontWeight={800}
          fontSize={{ sm: "4xl", lg: "4xl", xl: "5xl" }}
          letterSpacing={"0.1em"}
          color={"#414042"}
        >
          BADAN PELAKSANA PROGRAM
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ sm: "4xl", lg: "4xl", xl: "2xl" }}
          letterSpacing={"0.1em"}
          color={"#414042"}
        >
          KELUARGA MAHASISWA TEKNIK PENERBANGAN (KMPN)
        </Text>
        {/* <Divider orientation="horizontal" borderWidth={3} bgColor={"black"} /> */}
        <Flex gap={200} mt={40}>
          <Flex
            px={20}
            bgColor={"#2D83BA"}
            boxShadow={"inset 0px 11.1706px 11.1706px rgba(0, 0, 0, 0.25)"}
            borderRadius={30}
            cursor={"pointer"}
            _hover={{
              bgColor: "#28668D",
            }}
          >
            <Text
              textAlign={"center"}
              color={"white"}
              fontWeight={800}
              fontSize={"6xl"}
              textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
              letterSpacing={"0.1em"}
              onClick={() => {
                onOpen();
                setStateModal("visi");
              }}
            >
              VISI
            </Text>
          </Flex>
          <Flex
            px={20}
            bgColor={"#2D83BA"}
            boxShadow={"inset 0px 11.1706px 11.1706px rgba(0, 0, 0, 0.25)"}
            borderRadius={30}
            cursor={"pointer"}
            _hover={{
              bgColor: "#28668D",
            }}
          >
            <Text
              textAlign={"center"}
              color={"white"}
              fontWeight={800}
              fontSize={"6xl"}
              textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
              letterSpacing={"0.1em"}
              onClick={() => {
                onOpen();
                setStateModal("misi");
              }}
            >
              MISI
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexDir={"column"}
        textAlign={"center"}
        bg={`url(${bgSh})`}
        mt={300}
        px={100}
      >
        <Text
          color={"#E6E7E8"}
          fontWeight={800}
          fontSize={"5xl"}
          textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
          letterSpacing={"0.1em"}
          mt={10}
        >
          STAKEHOLDERS
        </Text>
        <Text
          color={"#E6E7E8"}
          fontWeight={400}
          fontSize={"2xl"}
          textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
          letterSpacing={"0.1em"}
        >
          BPP KMPN 2022/2023
        </Text>

        <Flex flexDir={"column"} mt={10}>
          <Stakeholder data_input={stakeholder_data} />
        </Flex>
      </Flex>

      <Flex
        flexDir={"column"}
        bg={`url(${bgProg})`}
        textAlign={"center"}
        py={10}
      >
        <Text
          color={"#414042"}
          fontWeight={800}
          fontSize={"5xl"}
          textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
          letterSpacing={"0.1em"}
          mt={20}
        >
          PROGRAM UNGGULAN
        </Text>
        <Text
          color={"#414042"}
          fontWeight={400}
          fontSize={"2xl"}
          textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
          letterSpacing={"0.1em"}
        >
          BPP KMPN 2022/2023
        </Text>
        <Flex px={250} py={20}>
          <Flex flexDir={"column"}>
            <Image src={aisicon} w={350} />
            <Flex
              px={20}
              py={1}
              bgColor={"#2D83BA"}
              boxShadow={"inset 0px 5.63395px 5.63395px rgba(0, 0, 0, 0.25)"}
              borderRadius={30}
              cursor={"pointer"}
              _hover={{
                bgColor: "#28668D",
              }}
              onClick={() =>
                window.open("https://www.instagram.com/ais.itb/", "_blank")
              }
            >
              <Text
                textAlign={"center"}
                color={"white"}
                fontWeight={800}
                fontSize={"3xl"}
                textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
                letterSpacing={"0.1em"}
                w={"full"}
              >
                AIS
              </Text>
            </Flex>
          </Flex>
          <Spacer />
          <Flex flexDir={"column"}>
            <Image src={kudticon} w={350} />
            <Flex
              px={20}
              py={1}
              bgColor={"#2D83BA"}
              boxShadow={"inset 0px 5.63395px 5.63395px rgba(0, 0, 0, 0.25)"}
              borderRadius={30}
              cursor={"pointer"}
              _hover={{
                bgColor: "#28668D",
              }}
              onClick={() => nav("/kudt")}
            >
              <Text
                textAlign={"center"}
                color={"white"}
                fontWeight={800}
                fontSize={"3xl"}
                textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
                letterSpacing={"0.1em"}
                w={"full"}
              >
                KUDT
              </Text>
            </Flex>
          </Flex>
          <Spacer />
          <Flex flexDir={"column"}>
            <Image src={roadmapicon} w={350} />
            <Flex
              px={20}
              py={1}
              bgColor={"#2D83BA"}
              boxShadow={"inset 0px 5.63395px 5.63395px rgba(0, 0, 0, 0.25)"}
              borderRadius={30}
              cursor={"pointer"}
              _hover={{
                bgColor: "#28668D",
              }}
              onClick={() => {
                onOpen();
                setStateModal("roadmap");
              }}
            >
              <Text
                textAlign={"center"}
                color={"white"}
                fontWeight={800}
                fontSize={"3xl"}
                textShadow={"0px 7.53608px 82.8969px rgba(58, 58, 60, 0.2)"}
                letterSpacing={"0.1em"}
                w={"full"}
              >
                ROADMAP
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bg={`url(${bgDok})`}
        flexDir={"column"}
        px={250}
        pt={40}
        pb={10}
        alignItems={"center"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} w={"80%"}>
          <Flex
            boxSize={50}
            bgColor={"#E6E7E8"}
            boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
            borderRadius={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() =>
              stateDok < 1 ? setStateDok(0) : setStateDok(stateDok - 2)
            }
          >
            <Image src={leftArrowDouble} boxSize={5} />
          </Flex>
          <Spacer />
          <Flex gap={100}>
            <Image boxSize={400} src={dokum_photo_s[stateDok] as string} />
            <Image boxSize={400} src={dokum_photo_s[stateDok + 1] as string} />
          </Flex>
          <Spacer />
          <Flex
            boxSize={50}
            bgColor={"#E6E7E8"}
            boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
            borderRadius={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() =>
              stateDok > dokum_photo_s.length - 3
                ? setStateDok(dokum_photo_s.length - 2)
                : setStateDok(stateDok + 2)
            }
          >
            <Image src={rightArrowDouble} boxSize={5} />
          </Flex>
        </Flex>
        <Flex w={"full"} justifyContent={"end"}>
          <Text
            color={"#fff"}
            fontWeight={800}
            fontSize={"5xl"}
            textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
            letterSpacing={"0.1em"}
            mt={10}
          >
            DOKUMENTASI | KEGIATAN
          </Text>
        </Flex>
      </Flex>

      <Footer />

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
        <ModalOverlay />
        <ModalCont type={stateModal} />
      </Modal>
    </Box>
  );
};

export default BPP;
