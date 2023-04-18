import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import bg from "../../asset/bg/senator.png";
import Footer from "../../components/Footer";

const Senator = () => {
  return (
    <Box w={"full"}>
      <Flex bg={`url(${bg})`} py={20} alignItems={"center"} flexDir={"column"}>
        <Text
          fontSize={"8xl"}
          fontWeight={800}
          color={"#fff"}
          textShadow={"6.36093px 2.54437px 21.6272px rgba(0, 0, 0, 0.25)"}
        >
          BADAN KESENATORAN
        </Text>
        <Text
          fontSize={"4xl"}
          fontWeight={400}
          color={"#1C5579"}
          textShadow={"0px 4.08072px 44.8879px rgba(58, 58, 60, 0.2)"}
        >
          KELUARGA MAHASISWA TEKNIK PENERBANGAN
        </Text>

        <Flex
          mt={44}
          px={20}
          py={10}
          w={"60%"}
          bgColor={"#EBF3FF"}
          borderRadius={30}
          boxShadow={
            "-34.7904px -34.7904px 69.5809px #EEEAEA, 34.7904px 34.7904px 69.5809px rgba(180, 193, 213, 0.5), inset -27.8324px -27.8324px 55.6647px #FFFFFF, inset 27.8324px 27.8324px 55.6647px #D0D3D7"
          }
        >
          <Flex
            px={20}
            py={10}
            flexDir={"column"}
            bgColor={"#1C5579"}
            borderRadius={30}
            boxShadow={
              "-31.6105px -31.6105px 63.2209px #FFFFFF, 31.6105px 31.6105px 63.2209px #D0D3D7"
            }
            textAlign={"justify"}
            color={"#D9D9D9"}
            gap={10}
          >
            <Text fontSize={"xl"}>
              Badan Kesenatoran atau biasa disebut tim senator merupakan badan
              yang dibentuk dengan tujuan membantu Senator dalam menjalankan
              fungsi penarikan aspirasi dan penyampaian keputusan yang dibuat
              oleh Kongres KM ITB kepada anggota KMPN.
            </Text>
            <Text fontSize={"xl"}>
              Terdapat 3 komponen dalam organogram badan kesenatoran, yaitu
              Wakil ketua, divisi kajian dan aspirasi, dan media dan konten.
            </Text>
          </Flex>
        </Flex>

        <Flex w={"full"} pt={40} pb={10} flexDir={"column"}>
          <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
            <Text
              color={"#28668D"}
              fontWeight={800}
              fontSize={"6xl"}
              mr={-5}
              pl={100}
            >
              THE PEOPLE
            </Text>
            <Flex bgColor={"#28668D"} h={3} flex={1} mt={2}></Flex>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Flex gap={20} px={100} py={10} mt={10}>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box boxSize={80} bgColor={"#28668D"} mb={5} />
                <Text
                  letterSpacing={"0.05em"}
                  color={"#1C5579"}
                  fontSize={"xl"}
                  fontWeight={600}
                >
                  Maulana Hayu J.
                </Text>
                <Text
                  letterSpacing={"0.05em"}
                  color={"#414042"}
                  fontSize={"xl"}
                  fontWeight={200}
                >
                  Senator
                </Text>
              </Flex>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box boxSize={80} bgColor={"#28668D"} mb={5} />
                <Text
                  letterSpacing={"0.05em"}
                  color={"#1C5579"}
                  fontSize={"xl"}
                  fontWeight={600}
                >
                  Melvin Natalius C.
                </Text>
                <Text
                  letterSpacing={"0.05em"}
                  color={"#414042"}
                  fontSize={"xl"}
                  fontWeight={200}
                >
                  Wakil Senator
                </Text>
              </Flex>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box boxSize={80} bgColor={"#28668D"} mb={5} />
                <Text
                  letterSpacing={"0.05em"}
                  color={"#1C5579"}
                  fontSize={"xl"}
                  fontWeight={600}
                >
                  Michael Yusak
                </Text>
                <Text
                  letterSpacing={"0.05em"}
                  color={"#414042"}
                  fontSize={"xl"}
                  fontWeight={200}
                >
                  Divisi Kajian & Aspirasi
                </Text>
              </Flex>
            </Flex>
            <Flex gap={20} px={100} py={10}>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box boxSize={80} bgColor={"#28668D"} mb={5} />
                <Text
                  letterSpacing={"0.05em"}
                  color={"#1C5579"}
                  fontSize={"xl"}
                  fontWeight={600}
                >
                  Maulana Hayu J.
                </Text>
                <Text
                  letterSpacing={"0.05em"}
                  color={"#414042"}
                  fontSize={"xl"}
                  fontWeight={200}
                >
                  Senator
                </Text>
              </Flex>
              <Flex
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box boxSize={80} bgColor={"#28668D"} mb={5} />
                <Text
                  letterSpacing={"0.05em"}
                  color={"#1C5579"}
                  fontSize={"xl"}
                  fontWeight={600}
                >
                  Melvin Natalius C.
                </Text>
                <Text
                  letterSpacing={"0.05em"}
                  color={"#414042"}
                  fontSize={"xl"}
                  fontWeight={200}
                >
                  Wakil Senator
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={"full"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
            <Flex bgColor={"#28668D"} h={3} flex={1} mt={2}></Flex>
            <Text
              color={"#28668D"}
              fontWeight={800}
              fontSize={"6xl"}
              ml={-3}
              pr={100}
            >
              DOKUMEN
            </Text>
          </Flex>
          <Flex
            px={100}
            py={20}
            w={"60%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={48}
          >
            <Flex
              flexDir={"column"}
              gap={5}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color={"#1C5579"} fontSize={"4xl"} fontWeight={800}>
                FILE TAP
              </Text>
              <Flex
                w={"sm"}
                p={5}
                bgColor={"#E6E7E8"}
                boxShadow={
                  "-2.41406px -2.41406px 0px #E6E7E8, -4.82812px -4.82812px 4.82812px #B8CCE0, inset -2.41406px -2.41406px 0px #E6E7E8, inset -4.82812px -4.82812px 4.82812px #B8CCE0"
                }
                borderRadius={50}
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1CatQ578ivVqHyJqXXMdbyRC_Go2Zf6BF",
                    "_blank"
                  )
                }
              >
                <Flex
                  w={"full"}
                  px={5}
                  py={1}
                  bgColor={"#F1F5F9"}
                  boxShadow={
                    "19.9951px 19.9951px 39.9902px #C9D9E8, -19.9951px -19.9951px 39.9902px #FFFFFF"
                  }
                  borderRadius={30}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    color={"#1C5579"}
                    fontSize={"4xl"}
                    fontWeight={600}
                    _hover={{ textColor: "#0A66C2" }}
                  >
                    Click Here
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={5}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color={"#1C5579"} fontSize={"4xl"} fontWeight={800}>
                KONSEPSI AD-ART
              </Text>
              <Flex
                w={"sm"}
                p={5}
                bgColor={"#E6E7E8"}
                boxShadow={
                  "-2.41406px -2.41406px 0px #E6E7E8, -4.82812px -4.82812px 4.82812px #B8CCE0, inset -2.41406px -2.41406px 0px #E6E7E8, inset -4.82812px -4.82812px 4.82812px #B8CCE0"
                }
                borderRadius={50}
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1AweBAcYN8sHr13bXRhDeMkftsIVTAfft",
                    "_blank"
                  )
                }
              >
                <Flex
                  w={"full"}
                  px={5}
                  py={1}
                  bgColor={"#F1F5F9"}
                  boxShadow={
                    "19.9951px 19.9951px 39.9902px #C9D9E8, -19.9951px -19.9951px 39.9902px #FFFFFF"
                  }
                  borderRadius={30}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    color={"#1C5579"}
                    fontSize={"4xl"}
                    fontWeight={600}
                    _hover={{ textColor: "#0A66C2" }}
                  >
                    Click Here
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer senator />
    </Box>
  );
};

export default Senator;
