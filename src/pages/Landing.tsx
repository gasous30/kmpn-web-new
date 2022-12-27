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
  Divider,
  FormControl,
  Input,
  FormLabel,
  Show,
  Hide,
} from "@chakra-ui/react";
import { useEffect, useState, useRef, useContext } from "react";

import header1 from "../asset/header/1.png";
import header2 from "../asset/header/2.png";
import header3 from "../asset/header/3.png";
import header4 from "../asset/header/4.png";

import bgfoot from "../asset/bgfoot.svg";
import maps from "../asset/maps.svg";

import nilai from "../asset/nilai.svg";
import sejarah from "../asset/sejarah.svg";
import tujuan from "../asset/tujuan.svg";
import nilaiwhite from "../asset/nilaiwhite.svg";
import sejarahwhite from "../asset/sejarahwhite.svg";
import tujuanwhite from "../asset/tujuanwhite.svg";

import glider from "../asset/glider.svg";
import gliderbiru from "../asset/gliderbiru.svg";
import gliderabu from "../asset/gliderabu.svg";

import senatoricon from "../asset/senatoricon.png";
import dpaicon from "../asset/dpaicon.png";
import bppicon from "../asset/bppicon.png";

import envelope from "../asset/envelope.svg";
import location from "../asset/location.svg";

import leftdouble from "../asset/leftdouble.svg";
import rightdouble from "../asset/rightdouble.svg";

import igblack from "../asset/igblack.svg";
import linkedinblack from "../asset/linkedinblack.svg";
import twitterblack from "../asset/twitterblack.svg";

import data from "../dummydata";

import useDraggableScroll from "use-draggable-scroll";

import { WPContext } from "../provider/Provider";

import axios from "axios";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const ModalAbout = ({ type }: { type: string }) => {
  return (
    <ModalContent
      bg={"#2D83BA"}
      color={"white"}
      borderRadius={30}
      p={7}
      h={{ sm: "2xl", md: "3xl", lg: "lg" }}
      boxShadow={"inset 11px 11px 30px 5px rgba(0, 0, 0, 0.25)"}
    >
      <ModalHeader>
        <Flex
          justifyContent={{ sm: "center", lg: "inherit" }}
          alignItems={"center"}
          gap={3}
          flexDir={{ sm: "column", lg: "row" }}
        >
          <Image
            src={
              type === "sejarah"
                ? sejarahwhite
                : type === "tujuan"
                ? tujuanwhite
                : nilaiwhite
            }
            boxSize={{ sm: 40, lg: 20 }}
          />
          <Text fontSize={{ sm: "4xl", lg: "3xl" }}>
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
          p={{ sm: 3, md: 10 }}
        >
          {type === "sejarah" ? (
            <Text
              fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
              textAlign={"center"}
            >
              KMPN ITB berdiri pada tanggal 6 Agustus 1997 dengan menjunjung
              tinggi Pancasila
            </Text>
          ) : type === "tujuan" ? (
            <OrderedList
              fontSize={{ sm: "md", md: "lg", lg: "2xl" }}
              textAlign={"justify"}
            >
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

              <OrderedList
                fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
                textAlign={"justify"}
              >
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
    <>
      <Show above="lg">
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
            boxSize={{ lg: 150, xl: 300 }}
          >
            <Image
              src={
                type === "bpp"
                  ? bppicon
                  : type === "dpa"
                  ? dpaicon
                  : senatoricon
              }
              boxSize={{ lg: 150, xl: 300 }}
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
            fontSize={{ xl: "xl", "2xl": "2xl" }}
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
      </Show>
      <Hide above="lg">
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"90%"}
          gap={10}
        >
          <Center
            borderRadius={"full"}
            bg={
              "radial-gradient(100.07% 99.2% at 28.21% 11.53%, rgba(255, 255, 255, 0.65) 34.45%, rgba(255, 255, 255, 0.28) 62.42%, rgba(255, 255, 255, 0.14) 100%) "
            }
            boxShadow={
              "-7.24229px 5.31101px 35.2458px rgba(40, 47, 78, 0.1), inset -4px 7px 17px rgba(0, 0, 0, 0.25)"
            }
            backdropFilter={"blur(4.34537px)"}
          >
            <Image
              src={
                type === "bpp"
                  ? bppicon
                  : type === "dpa"
                  ? dpaicon
                  : senatoricon
              }
              boxSize={{ sm: 150, md: 200 }}
            />
          </Center>
          <Flex flexDir={"column-reverse"} w={"50%"}>
            <Text
              textAlign={"justify"}
              mt={5}
              fontWeight={400}
              fontSize={{ sm: "md", md: "lg" }}
            >
              {type === "bpp"
                ? "Badan Pelaksana Program (BPP) adalah lembaga eksekutif tertinggi dalam KMPN ITB dan bertanggungjawab kepada DPA."
                : type === "dpa"
                ? "Dewan Perwakilan Anggota (DPA) adalah lembaga pemegang kedaulatan tertinggi dalam Keluarga Mahasiswa Teknik Penerbangan yang merupakan perwakilan dari seluruh anggota."
                : "Kesenatoran merupakan sebuah tim yang dibentuk dengan tujuan membantu Senator dalam menjalankan fungsi penarikan aspirasi dan penyampaian keputusan yang dibuat oleh Kongres KM ITB kepada anggota KMPN."}
            </Text>
            <Box
              bg={"#2D83BA"}
              fontSize={{ sm: "md", md: "xl" }}
              fontWeight={800}
              textShadow={"0px 3.03586px 33.3945px rgba(58, 58, 60, 0.2)"}
              letterSpacing={"0.1em"}
              color={"#FFF"}
              w={"full"}
              textAlign={"center"}
              p={3}
              boxShadow={"inset 0px 4.5px 4.5px rgba(0, 0, 0, 0.25)"}
              borderRadius={50}
            >
              <Text>
                {type === "bpp"
                  ? "BPP"
                  : type === "dpa"
                  ? "DPA"
                  : "KESENATORAN"}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Hide>
    </>
  );
};

const CardCarousel = ({ alter, post }: { alter?: boolean; post: any }) => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      w={{ sm: "60vw", md: "40vw", lg: "25vw", xl: "18vw" }}
      p={10}
      textAlign={"center"}
      bg={alter ? "#28668D" : "#2D83BA"}
      boxShadow={"6px 6px 6px #D9D9D9"}
      borderRadius={"51px"}
      color={"white"}
      id={post.id}
    >
      <Text
        fontSize={{ sm: "lg", md: "xl" }}
        textTransform={"uppercase"}
        letterSpacing={"0.1em"}
        fontWeight={800}
        mb={5}
      >
        {post ? post.title.rendered : "lorem lorem terlorem lorem"}
      </Text>
      <Box
        fontSize={{ sm: "md", md: "lg" }}
        letterSpacing={"0.1em"}
        fontWeight={400}
        mb={5}
        // h={"20vh"}
        // overflow={"hidden"}
      >
        {post ? parse(post.excerpt.rendered) : "lorem lorem terlorem lorem"}
      </Box>
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
          fontSize={{ sm: "md", md: "lg" }}
          letterSpacing={"0.1em"}
          fontWeight={400}
          cursor={"pointer"}
          onClick={() => navigate("/post/" + post.id)}
        >
          Selengkapnya
        </Text>
      </Box>
    </Flex>
  );
};

const Landing = () => {
  const headerImages = [header1, header2, header3, header4];

  const [state, setState] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenBehind,
    onOpen: onOpenBehind,
    onClose: onCloseBehind,
  } = useDisclosure();
  const [stateAbout, setAbout] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (shift: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += shift;
    }
  };

  const [allPost, setAllPost] = useState<any[]>();
  const wp = useContext(WPContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => (state < headerImages.length - 1 ? state + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${wp.wordpressLink}/wp-json/wp/v2/posts`)
  //     .then((res) => setAllPost(res.data));
  // }, []);

  return (
    <Box w={"full"}>
      <Box w={"full"}>
        <MotionBox
          key={state}
          w={"full"}
          height={"3xl"}
          bg={`linear-gradient(180deg,rgba(231, 231, 232, 0.3) 2.96% , rgba(109, 213, 250, 0.5) 100.73%, #2980B9 300.96%), url(${headerImages[state]})`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.2, 0.8, 0.98] }}
        />
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          w={"full"}
          pos={"absolute"}
          top={{ lg: 480, sm: 350 }}
        >
          <Flex
            fontSize={{ base: "4xl", lg: "4xl", xl: "5xl", sm: "3xl" }}
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
          <Image src={glider} boxSize={125} mb={5} mt={{ sm: 150, lg: 0 }} />
        </Flex>
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
          fontSize={{ sm: "4xl", lg: "4xl", xl: "5xl" }}
          letterSpacing={"0.1em"}
          color={"#3A3A3C"}
        >
          TENTANG KAMI
        </Text>

        <Flex
          flexDir={"column"}
          w={{ sm: "80%", lg: "60%" }}
          bg={"#2D83BA"}
          boxShadow={"0px 4px 30px rgba(0, 0, 0, 0.25)"}
          borderRadius={50}
          mt={10}
          px={{ sm: 10, lg: 20 }}
          py={{ sm: 5, lg: 10 }}
        >
          <Text
            fontWeight={400}
            fontSize={{ lg: "xl", xl: "2xl" }}
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

        <Flex
          gap={{ sm: 10, lg: 20 }}
          mt={10}
          flexDir={{ sm: "column", lg: "row" }}
        >
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ sm: "sm", md: "lg", lg: "4xl" }}
            isCentered
          >
            <ModalOverlay />
            <ModalAbout type={stateAbout} />
          </Modal>

          <Flex
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
              setAbout("sejarah");
            }}
            flexDir={{ sm: "row", lg: "column" }}
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
            <Center ml={{ sm: 10, lg: 0 }}>
              <Text
                fontWeight={600}
                fontSize={{ sm: "2xl", md: "3xl", lg: "2xl", xl: "3xl" }}
                mt={{ sm: 0, lg: 5 }}
              >
                Sejarah
              </Text>
            </Center>
          </Flex>

          <Flex
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
              setAbout("tujuan");
            }}
            flexDir={{ sm: "row", lg: "column" }}
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
            <Center ml={{ sm: 10, lg: 0 }}>
              <Text
                fontWeight={600}
                fontSize={{ sm: "2xl", md: "3xl", lg: "2xl", xl: "3xl" }}
                mt={{ sm: 0, lg: 5 }}
              >
                Tujuan
              </Text>
            </Center>
          </Flex>

          <Flex
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => {
              onOpen();
              setAbout("nilai");
            }}
            flexDir={{ sm: "row", lg: "column" }}
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
            <Center ml={{ sm: 10, lg: 0 }}>
              <Text
                fontWeight={600}
                fontSize={{ sm: "2xl", md: "3xl", lg: "2xl", xl: "3xl" }}
                mt={{ sm: 0, lg: 5 }}
              >
                Nilai
              </Text>
            </Center>
          </Flex>
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
          fontSize={{ sm: "3xl", md: "4xl", xl: "5xl" }}
          letterSpacing={"0.1em"}
          color={"#3A3A3C"}
          textAlign={"center"}
        >
          BADAN KELENGKAPAN
          {
            <Hide above="md">
              <br />
            </Hide>
          }{" "}
          ORGANISASI
        </Text>

        <Flex
          w={{ lg: "90%", xl: "80%" }}
          justifyContent={"center"}
          alignItems={{ sm: "center", lg: "normal" }}
          gap={{ sm: 75, lg: 75, xl: 125 }}
          mt={10}
          flexDir={{ sm: "column", lg: "row" }}
        >
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
        <Flex
          flexDir={"column"}
          w={"full"}
          alignItems={{ base: "center", "2xl": "flex-end" }}
        >
          <Text
            fontWeight={800}
            fontSize={{ sm: "3xl", md: "4xl", xl: "5xl" }}
            letterSpacing={"0.1em"}
            color={"#3A3A3C"}
            w={{ base: "100%", "2xl": "50%" }}
            textAlign={"center"}
          >
            BERITA TERKINI
            {
              <Hide above="md">
                <br />
              </Hide>
            }{" "}
            DARI KMPN
          </Text>
          <Divider
            border={"8px solid"}
            borderColor={"black"}
            w={{ base: "70%", "2xl": "50%", lg: "45%" }}
            opacity={1}
            display={{ sm: "none", md: "inherit" }}
          />
        </Flex>

        <Flex
          w={"full"}
          mt={20}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          scrollBehavior={"smooth"}
          overflow={"scroll"}
          ref={scrollRef}
        >
          <Flex gap={{ base: 20, sm: 10 }}>
            {allPost
              ? allPost.map((post, index) => {
                  if (index % 2 == 0) {
                    return <CardCarousel post={post} />;
                  } else {
                    return <CardCarousel post={post} alter />;
                  }
                })
              : data.map((post, index) => {
                  if (index % 2 == 0) {
                    return <CardCarousel post={post} />;
                  } else {
                    return <CardCarousel post={post} alter />;
                  }
                })}
            {allPost
              ? allPost.map((post, index) => {
                  if (index % 2 == 0) {
                    return <CardCarousel post={post} />;
                  } else {
                    return <CardCarousel post={post} alter />;
                  }
                })
              : data.map((post, index) => {
                  if (index % 2 == 0) {
                    return <CardCarousel post={post} />;
                  } else {
                    return <CardCarousel post={post} alter />;
                  }
                })}
          </Flex>
        </Flex>

        <Flex mt={10} w={"80%"}>
          <Flex
            bg={" #E6E7E8"}
            boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
            boxSize={45}
            borderRadius={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() => slide(-0.8 * window.innerWidth)}
          >
            <Image src={leftdouble} boxSize={15} />
          </Flex>
          <Spacer />
          <Flex
            bg={" #E6E7E8"}
            boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
            boxSize={45}
            borderRadius={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            onClick={() => slide(0.8 * window.innerWidth)}
          >
            <Image src={rightdouble} boxSize={15} />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexDir={"column"}
        px={20}
        // pt={200}
        // pb={100}
        h={"3xl"}
        mt={20}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        bg={"#2D83BA"}
        bgImage={bgfoot}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          gap={{ sm: 10, lg: 20 }}
          flexDir={{ sm: "column", lg: "row" }}
        >
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            letterSpacing={"0.1em"}
            fontWeight={400}
            fontSize={{ sm: "3xl", lg: "2xl" }}
          >
            <Text fontWeight={700}>Alamat Sekretariat</Text>
            <Image
              boxSize={{ base: "xs", lg: 250, sm: 200 }}
              src={maps}
              borderRadius={35}
            />
          </Flex>
          <Flex
            flexDir={"column"}
            fontSize={{ base: "3xl", xl: "5xl", lg: "2xl" }}
            justifyContent={"center"}
            alignItems={"center"}
            border={"2px solid #FFFFFF"}
            p={{ base: 20, sm: 10 }}
            borderRadius={40}
            textAlign={"center"}
          >
            <Text letterSpacing={"0.1em"} fontWeight={800}>
              SEND US A MESSAGE
            </Text>
            <MotionFlex
              mt={{ sm: 5, md: 10 }}
              bg={"#1C5579"}
              boxShadow={
                "0px 8.06091px 8.06091px rgba(0, 0, 0, 0.25), inset 6.04568px 8.06091px 8.06091px rgba(65, 64, 66, 0.25)"
              }
              alignItems={"center"}
              justifyContent={"center"}
              py={2}
              w={"40%"}
              borderRadius={50}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Text
                fontSize={{ base: "2xl", xl: "4xl", lg: "xl", sm: "xl" }}
                fontWeight={600}
                letterSpacing={"0.1em"}
              >
                Here!
              </Text>
            </MotionFlex>
          </Flex>
        </Flex>
        <Box textAlign={"center"} w={"full"}>
          <MotionText
            mt={{ sm: 10, lg: 20 }}
            fontWeight={700}
            fontSize={{ base: "2xl", xl: "3xl" }}
            letterSpacing={"0.1em"}
            fontStyle={"italic"}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Untuk KMPN, Dirgantara, dan Indonesia yang jaya selama-lamanya!
          </MotionText>
        </Box>
      </Flex>

      <Flex
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
          <Image src={twitterblack} />
          <Image src={linkedinblack} />
          <Image src={igblack} />
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
                <Flex mt={10} gap={20}>
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
                  >
                    <Text fontWeight={700}>POSISI</Text>
                    <Box
                      boxSize={150}
                      border={"1px solid #000000"}
                      bg={"#D9D9D9"}
                      borderRadius={"full"}
                    />
                    <Text>Nama</Text>
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
                  >
                    <Text fontWeight={700}>POSISI</Text>
                    <Box
                      boxSize={150}
                      border={"1px solid #000000"}
                      bg={"#D9D9D9"}
                      borderRadius={"full"}
                    />
                    <Text>Nama</Text>
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
                  >
                    <Text fontWeight={700}>POSISI</Text>
                    <Box
                      boxSize={150}
                      border={"1px solid #000000"}
                      bg={"#D9D9D9"}
                      borderRadius={"full"}
                    />
                    <Text>Nama</Text>
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
                </Flex>
              </Flex>
            </Hide>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default Landing;
