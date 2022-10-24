import {
  Box,
  Text,
  Image,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  OrderedList,
  ListItem,
  Center,
  Spacer,
  Slider,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

import header1 from "../asset/header/1.png";
import header2 from "../asset/header/2.png";
import header3 from "../asset/header/3.png";
import header4 from "../asset/header/4.png";

import nilai from "../asset/nilai.svg";
import sejarah from "../asset/sejarah.svg";
import tujuan from "../asset/tujuan.svg";
import nilaiwhite from "../asset/nilaiwhite.svg";
import sejarahwhite from "../asset/sejarahwhite.svg";
import tujuanwhite from "../asset/tujuanwhite.svg";

import glider from "../asset/glider.svg";
import gliderbiru from "../asset/gliderbiru.svg";
import gliderabu from "../asset/gliderabu.svg";

import senatoricon from "../asset/senatoricon.svg";
import dpaicon from "../asset/dpaicon.svg";
import bppicon from "../asset/bppicon.svg";

import envelope from "../asset/envelope.svg";
import location from "../asset/location.svg";

import useDraggableScroll from "use-draggable-scroll";

const ModalAbout = ({ type }: { type: string }) => {
  return (
    <ModalContent
      bg={"#2D83BA"}
      color={"white"}
      borderRadius={30}
      p={7}
      h={"lg"}
      boxShadow={"inset 11px 11px 30px 5px rgba(0, 0, 0, 0.25)"}
    >
      <ModalHeader>
        <Flex alignItems={"center"} gap={3}>
          <Image
            src={
              type === "sejarah"
                ? sejarahwhite
                : type === "tujuan"
                ? tujuanwhite
                : nilaiwhite
            }
            boxSize={20}
          />
          <Text fontSize={"3xl"}>
            {type === "sejarah"
              ? "Sejarah"
              : type === "tujuan"
              ? "Tujuan"
              : "Nilai"}
          </Text>
        </Flex>
      </ModalHeader>
      <ModalCloseButton size={"lg"} />
      <ModalBody>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          h={"80%"}
          w={"full"}
          p={10}
        >
          {type === "sejarah" ? (
            <Text fontSize={"2xl"} textAlign={"center"}>
              KMPN ITB berdiri pada tanggal 6 Agustus 1997 dengan menjunjung
              tinggi Pancasila
            </Text>
          ) : type === "tujuan" ? (
            <OrderedList fontSize={"2xl"} textAlign={"justify"}>
              <ListItem>
                Mendukung berlangsungnya proses pendidikan di Program Studi
                Teknik Dirgantara Institut Teknologi Bandung,
              </ListItem>
              <ListItem>
                Menyediakan wadah untuk menampung aspirasi Mahasiswa Teknik
                Dirgantara Institut Teknologi Bandung melalui asas kekeluargaan,
              </ListItem>
              <ListItem>
                KMPN ITB juga berusaha mengembangkan anggotanya dalam
                menyalurkan karya cipta, tenaga, dan pikiran dalam rangka
                pembangunan Negara Indonesia, khususnya dalam bidang
                kedirgantaraan.
              </ListItem>
            </OrderedList>
          ) : (
            <Flex flexDir={"column"}>
              <Text
                fontSize={"3xl"}
                textAlign={"center"}
                fontWeight={600}
                mb={2}
              >
                5 NILAI KMPN
              </Text>

              <OrderedList fontSize={"2xl"} textAlign={"justify"}>
                <ListItem>Kebersamaan dalam kekeluargaan,</ListItem>
                <ListItem>Demokratis,</ListItem>
                <ListItem>Kemahasiswaan yang profesional,</ListItem>
                <ListItem>Progresif, dan</ListItem>
                <ListItem>Saling menghormati dengan pihak luar.</ListItem>
              </OrderedList>
            </Flex>
          )}
        </Flex>
      </ModalBody>
    </ModalContent>
  );
};

const CardBKO = ({ type }: { type: string }) => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} w={"full"}>
      <Center
        borderRadius={"full"}
        bg={
          "radial-gradient(100.07% 99.2% at 28.21% 11.53%, rgba(255, 255, 255, 0.65) 34.45%, rgba(255, 255, 255, 0.28) 62.42%, rgba(255, 255, 255, 0.14) 100%) "
        }
        boxShadow={
          "-7.24229px 5.31101px 35.2458px rgba(40, 47, 78, 0.1), inset -4px 7px 17px rgba(0, 0, 0, 0.25)"
        }
        backdropFilter={"blur(4.34537px)"}
        boxSize={300}
      >
        <Image
          src={
            type === "bpp" ? bppicon : type === "dpa" ? dpaicon : senatoricon
          }
          boxSize={200}
        />
      </Center>
      <Text textAlign={"justify"} mt={10} fontWeight={400} fontSize={"lg"}>
        {type === "bpp"
          ? "Badan Pelaksana Program (BPP) adalah lembaga eksekutif tertinggi dalam KMPN ITB dan bertanggungjawab kepada DPA."
          : type === "dpa"
          ? "Dewan Perwakilan Anggota (DPA) adalah lembaga pemegang kedaulatan tertinggi dalam Keluarga Mahasiswa Teknik Penerbangan yang merupakan perwakilan dari seluruh anggota."
          : "Kesenatoran merupakan sebuah tim yang dibentuk dengan tujuan membantu Senator dalam menjalankan fungsi penarikan aspirasi dan penyampaian keputusan yang dibuat oleh Kongres KM ITB kepada anggota KMPN."}
      </Text>
      <Spacer />
      <Box
        mt={10}
        bg={"#2D83BA"}
        fontSize={"2xl"}
        fontWeight={800}
        textShadow={"0px 3.03586px 33.3945px rgba(58, 58, 60, 0.2)"}
        letterSpacing={"0.1em"}
        color={"#FFF"}
        w={"75%"}
        textAlign={"center"}
        p={3}
        boxShadow={"inset 0px 4.5px 4.5px rgba(0, 0, 0, 0.25)"}
        borderRadius={50}
      >
        <Text>
          {type === "bpp" ? "BPP" : type === "dpa" ? "DPA" : "KESENATORAN"}
        </Text>
      </Box>
    </Flex>
  );
};

const CardCarousel = ({ alter }: { alter?: boolean }) => {
  return (
    <Box>
      <Flex
        bg={
          "linear-gradient(144.34deg, rgba(255, 255, 255, 0.65) -8.63%, rgba(255, 255, 255, 0.28) 40.16%, rgba(255, 255, 255, 0.14) 105.72%)"
        }
        boxShadow={
          "-2.67657px 1.96282px 13.026px rgba(40, 47, 78, 0.1), inset -1.4783px 2.58703px 6.28278px rgba(0, 0, 0, 0.25)"
        }
        backdropFilter={"blur(1.60594px)"}
        borderRadius={"full"}
        boxSize={70}
        justifyContent={"center"}
        alignItems={"center"}
        pos={"relative"}
        left={"40%"}
        top={"8%"}
      >
        <Image src={gliderabu} boxSize={50} />
      </Flex>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        w={"18vw"}
        h={"40vh"}
        p={10}
        textAlign={"center"}
        bg={alter ? "#28668D" : "#2D83BA"}
        boxShadow={"6px 6px 6px #D9D9D9"}
        borderRadius={"51px"}
        color={"white"}
      >
        <Text
          fontSize={"xl"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          fontWeight={800}
          mb={3}
        >
          Lorem, ipsum dolor
        </Text>
        <Text fontSize={"lg"} letterSpacing={"0.1em"} fontWeight={400} mb={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          error.
        </Text>
        <Spacer />
        <Box
          w={"full"}
          bg={alter ? "#fff" : "rgba(217, 217, 217, 0.64)"}
          color={"#3A3A3C"}
          py={2}
          borderRadius={"27px"}
          boxShadow={"inset 0px 4px 4px rgba(0, 0, 0, 0.25)"}
        >
          <Text
            fontSize={"lg"}
            letterSpacing={"0.1em"}
            fontWeight={400}
            cursor={"pointer"}
            onClick={() => console.log("clicked")}
          >
            Selanjutnya
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Landing = () => {
  const headerImages = [header1, header2, header3, header4];

  const [state, setState] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateAbout, setAbout] = useState("");

  const scrollRef = useRef(null);

  const { onMouseDown } = useDraggableScroll(scrollRef, {
    direction: "horizontal",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => (state < headerImages.length - 1 ? state + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box w={"full"}>
      <Box w={"full"}>
        <Box
          bg={`linear-gradient(180deg,rgba(231, 231, 232, 0.3) 2.96% , rgba(109, 213, 250, 0.5) 100.73%, #2980B9 300.96%), url(${headerImages[state]})`}
          w={"full"}
          height={"3xl"}
          objectFit={"cover"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Flex
            fontSize={"5xl"}
            fontWeight={800}
            letterSpacing={"0.1em"}
            textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
            color={"#FFF"}
            w={"full"}
            flexDir={"column"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Text>KELUARGA MAHASISWA</Text>
            <Text>TEKNIK PENERBANGAN</Text>
          </Flex>
          <Image src={glider} boxSize={125} mb={5} />
        </Box>
      </Box>

      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={10}
        // h={"100vh"}
      >
        <Text
          fontWeight={800}
          fontSize={"5xl"}
          letterSpacing={"0.1em"}
          color={"#3A3A3C"}
        >
          TENTANG KAMI
        </Text>

        <Flex
          flexDir={"column"}
          w={"60%"}
          bg={"#2D83BA"}
          boxShadow={"0px 4px 30px rgba(0, 0, 0, 0.25)"}
          borderRadius={50}
          mt={10}
          px={20}
          py={10}
        >
          <Text
            fontWeight={400}
            fontSize={"2xl"}
            lineHeight={"150%"}
            letterSpacing={"0.015em"}
            color={"#FFF"}
            textAlign={"justify"}
          >
            Keluarga Mahasiswa Teknik Penerbangan (KMPN) ‘Otto Lilienthal’ ITB
            adalah sebuah organisasi kemahasiswaan yang menaungi seluruh
            Mahasiswa Program Sarjana Teknik Dirgantara Institut Teknologi
            Bandung
          </Text>
        </Flex>

        <Flex gap={20} mt={10}>
          <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered>
            <ModalOverlay />
            <ModalAbout type={stateAbout} />
          </Modal>

          <Box
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
              setAbout("sejarah");
            }}
          >
            <Flex
              boxSize={150}
              boxShadow={"inset 0px 16.8376px 16.8376px rgba(0, 0, 0, 0.25)"}
              borderRadius={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={sejarah} boxSize={100} />
            </Flex>
            <Text fontWeight={600} fontSize={"3xl"} mt={5}>
              Sejarah
            </Text>
          </Box>

          <Box
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
              setAbout("tujuan");
            }}
          >
            <Flex
              boxSize={150}
              boxShadow={"inset 0px 16.8376px 16.8376px rgba(0, 0, 0, 0.25)"}
              borderRadius={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={tujuan} boxSize={100} />
            </Flex>
            <Text fontWeight={600} fontSize={"3xl"} mt={5}>
              Tujuan
            </Text>
          </Box>

          <Box
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
              setAbout("nilai");
            }}
          >
            <Flex
              boxSize={150}
              boxShadow={"inset 0px 16.8376px 16.8376px rgba(0, 0, 0, 0.25)"}
              borderRadius={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={nilai} boxSize={100} />
            </Flex>
            <Text fontWeight={600} fontSize={"3xl"} mt={5}>
              Nilai
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        flexDir={"column"}
        mt={40}
        justifyContent={"center"}
        alignItems={"center"}
        // h={"100vh"}
      >
        <Image
          src={gliderbiru}
          boxSize={"60%"}
          filter={"blur(12.5px)"}
          pos={"absolute"}
          zIndex={-1}
          opacity={0.2}
        />
        <Text
          fontWeight={800}
          fontSize={"5xl"}
          letterSpacing={"0.1em"}
          color={"#3A3A3C"}
        >
          BADAN KELENGKAPAN ORGANISASI
        </Text>

        <Flex w={"80%"} justifyContent={"center"} gap={125} mt={10}>
          <CardBKO type="bpp" />
          <CardBKO type="kesenatoran" />
          <CardBKO type="dpa" />
        </Flex>
      </Flex>

      <Flex
        flexDir={"column"}
        mt={40}
        justifyContent={"center"}
        alignItems={"center"}
        // h={"100vh"}
      >
        <Text
          fontWeight={800}
          fontSize={"5xl"}
          letterSpacing={"0.1em"}
          color={"#3A3A3C"}
        >
          BERITA TERKINI DARI KMPN
        </Text>

        <Flex
          w={"full"}
          mt={8}
          overflow={"hidden"}
          ref={scrollRef}
          onMouseDown={onMouseDown}
        >
          <Flex gap={20}>
            <CardCarousel />
            <CardCarousel alter />
            <CardCarousel />
            <CardCarousel alter />
            <CardCarousel />
            <CardCarousel alter />
            <CardCarousel />
            <CardCarousel alter />
            <CardCarousel />
            <CardCarousel alter />
            <CardCarousel />
            <CardCarousel alter />
            <CardCarousel />
            <CardCarousel alter />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        p={20}
        pr={60}
        mt={40}
        justifyContent={"space-between"}
        color={"white"}
        bg={"#2D83BA"}
      >
        <Spacer />
        <Flex
          flexDir={"column"}
          w={"15%"}
          textAlign={"justify"}
          alignItems={"center"}
          letterSpacing={"0.1em"}
          fontWeight={400}
          fontSize={"xl"}
          gap={1}
        >
          <Image src={location} boxSize={62} />
          <Text fontWeight={700}>Alamat Sekretariat</Text>
          <Text>
            4J65+383, Kampus ITB Ganesha Jalan D, Gedung FTMD, Lb. Siliwangi,
            Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
          </Text>
          <Image src={envelope} boxSize={62} />
          <Text fontWeight={700}>E-Mail</Text>
          <Text>kmpn_itb@km.itb.ac.id</Text>
        </Flex>
        <Spacer />
        <Box letterSpacing={"0.1em"} fontWeight={800} fontSize={"5xl"} pt={10}>
          <Text>SEND US A MESSAGE!</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Landing;
