import {
  Flex,
  Image,
  Box,
  Text,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";

import bg_head from "../../asset/bg/kudt_header.png";
import uav from "../../asset/kudt_uav.png";
import gliderbiru from "../../asset/gliderbiru.svg";
import bg_page from "../../asset/bg/kudt_journey.png";

import arya from "../../asset/kudt_team/arya.png";
import andre from "../../asset/kudt_team/andre.png";
import faiq from "../../asset/kudt_team/faiq.png";
import faras from "../../asset/kudt_team/faras.png";
import faza from "../../asset/kudt_team/faza.png";
import levin from "../../asset/kudt_team/levin.png";
import nando from "../../asset/kudt_team/nando.png";

import leftArrowDouble from "../../asset/leftdouble.svg";
import rightArrowDouble from "../../asset/rightdouble.svg";

import kudt_journey from "../../asset/kudt_journey_elem.png";
import Footer from "../../components/Footer";

const KUDT = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateModal, setStateModal] = useState("");

  const BodyModal = ({ type }: { type: string }) => {
    return (
      <ModalBody>
        <Flex
          justifyContent={"center"}
          // alignItems={"center"}
          h={"full"}
          w={"full"}
          // p={{ sm: 3, md: 10 }}
          flexDir={"column"}
          gap={5}
        >
          <Text color={"#1C5579"} fontWeight={800} fontSize={"3xl"}>
            {(() => {
              switch (type) {
                case "sv":
                  return "SUPERVISOR";
                case "pl":
                  return "PROJECT LEADER";
                case "nontek":
                  return "NON-TECHNICAL MANAGER";
                case "aero":
                  return "HEAD OF AERODYNAMICS";
                case "structure":
                  return "HEAD OF STRUCTURES";
                case "system":
                  return "HEAD OF SYSTEM";
                case "dev":
                  return "HEAD OF STRATEGIC DEVELOPMENT";
                default:
                  return null;
              }
            })()}
          </Text>
          <Text
            fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
            textAlign={"justify"}
            fontWeight={200}
          >
            <UnorderedList>
              {(() => {
                switch (type) {
                  case "sv":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Membantu tim dalam merumuskan, membuat, dan
                            mengimplementasikan UAV yang akan disusun.
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Memberikan pertimbangan dan masukan mengenai segala
                            keperluan yang dibutuhkan oleh tim.
                          </Text>
                        </ListItem>
                      </>
                    );
                  case "pl":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Memimpin keberjalanan tim agar bekerja sesuai target
                            dan lini masa yang telah disusun. 
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Melakukan pengawasan terhadap seluruh divisi agar
                            dapat bekerja sesuai dengan tanggung jawab
                            masing-masing.
                          </Text>
                        </ListItem>
                      </>
                    );

                  case "nontek":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Memastikan berkas proposal, perizinan, dan dana
                            sponsor kegiatan dapat terpenuhi sesuai target yang
                            telah disusun. 
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Melakukan notulensi kegiatan pada setiap rapat antar
                            divisi. 
                          </Text>
                        </ListItem>
                      </>
                    );
                  case "aero":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Mendesain konfigurasi dan mendefinisikan ukuran awal
                            dari UAV. 
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Melakukan analisis dan pengukuran mekanisme
                            aerodinamis, propulsi, dan berat pada UAV.
                          </Text>
                        </ListItem>
                      </>
                    );
                  case "structure":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Mendefinisikan struktur awal dan material utama yang
                            digunakan dalam pembuatan UAV. 
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Menganalisis kekuatan struktur yang terdapat pada
                            UAV.
                          </Text>
                        </ListItem>
                      </>
                    );
                  case "system":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Menentukkan konfigurasi sistem elektronika optimal
                            pada UAV.
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Merancang sistem artificial intelligence pada flight
                            controller wahana.
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Menentukkan konfigurasi sistem propulsi pada UAV
                          </Text>
                        </ListItem>
                      </>
                    );
                  case "dev":
                    return (
                      <>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Melakukan set-up dan pengujian operasi pada UAV yang
                            telah dibuat. 
                          </Text>
                        </ListItem>
                        <ListItem fontSize={"sm"}>
                          <Text fontSize={"2xl"}>
                            Mengembangkan sistem kecerdasan buatan penunjang
                            misi pada wahana UAV.
                          </Text>
                        </ListItem>
                      </>
                    );
                  default:
                    return null;
                }
              })()}
            </UnorderedList>
          </Text>
        </Flex>
      </ModalBody>
    );
  };

  return (
    <Box w={"full"}>
      <Flex
        bg={`url(${bg_head})`}
        justifyContent={"center"}
        py={10}
        flexDir={"column"}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={uav} w={"4xl"} />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Text
            color={"#28668D"}
            fontWeight={800}
            fontSize={"9xl"}
            textShadow={"11px -9px 21px rgba(0, 0, 0, 0.25)"}
            letterSpacing={"0.1em"}
          >
            KUDT
          </Text>
          <Flex>
            <Image src={gliderbiru} w={100} />
          </Flex>
          <Text
            color={"#28668D"}
            fontWeight={800}
            fontSize={"9xl"}
            textShadow={"11px -9px 21px rgba(0, 0, 0, 0.25)"}
            letterSpacing={"0.1em"}
          >
            KUDT
          </Text>
        </Flex>

        <Text
          textAlign={"center"}
          textShadow={"0px 2.80824px 30.8906px rgba(58, 58, 60, 0.2)"}
          color={"#414042"}
          fontSize={"lg"}
          letterSpacing={"0.1em"}
        >
          KMPN UAV DEVELOPMENT TEAM
        </Text>
      </Flex>

      <Flex bgColor={"#2D83BA"} pr={100} py={20} flexDir={"column"}>
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Flex bgColor={"#E6E7E8"} h={2} flex={1} mt={2}></Flex>
          <Text color={"#E6E7E8"} fontWeight={800} fontSize={"6xl"} ml={-5}>
            THE PEOPLE BEHIND
          </Text>
        </Flex>

        <Flex px={100} pt={20} flexDir={"column"}>
          <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={faras} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  Muhammad Faras
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  SUPERVISOR
                </Text>
              </Flex>
            </Flex>
            <Spacer />

            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={arya} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  Mutaqin Aryawijaya
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  PROJECT LEADER
                </Text>
              </Flex>
            </Flex>
            <Spacer />

            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={nando} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  Fernando Hadi P.
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  NON-TECH MANAGER
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex flex={1} h={1} bgColor={"#D9D9D9"}></Flex>

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            mt={20}
          >
            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={faiq} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  Faiq Muhammad A.
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  HEAD OF AERODYNAMICS
                </Text>
              </Flex>
            </Flex>
            <Spacer />

            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={andre} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  Je Andre Stefano
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  HEAD OF STRUCTURE
                </Text>
              </Flex>
            </Flex>
            <Spacer />

            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={levin} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  Joshua Levin K.
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  HEAD OF SYSTEM
                </Text>
              </Flex>
            </Flex>
            <Spacer />

            <Flex flexDir={"column"}>
              <Flex
                boxSize={300}
                bg={"#d9d9d9"}
                borderRadius={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={
                  "-13.8242px -13.8242px 27.6484px #1C5579, 13.8242px 13.8242px 27.6484px #2D83BA"
                }
                filter={
                  "drop-shadow(13.8242px 13.8242px 41.4726px rgba(0, 0, 0, 0.25))"
                }
              >
                <Image src={faza} boxSize={275} borderRadius={"full"} />
              </Flex>
              <Flex flexDir={"column"} py={5} alignItems={"center"}>
                <Text color={"#E6E7E8"} fontWeight={700} fontSize={"2xl"}>
                  M. Faza Abel
                </Text>
                <Text color={"#000"} fontWeight={400} fontSize={"xl"}>
                  HEAD OF STRATEGIC DEV.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex bg={`url(${bg_page})`} py={10} flexDir={"column"}>
        <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Text
            color={"#28668D"}
            fontWeight={800}
            fontSize={"6xl"}
            pl={100}
            mr={-5}
          >
            KUDT'S JOURNEY
          </Text>
          <Flex bgColor={"#28668D"} h={2} flex={1} mt={2}></Flex>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} py={10}>
          <Image w={"7xl"} src={kudt_journey} />
        </Flex>

        <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Flex bgColor={"#28668D"} h={2} flex={1} mt={2}></Flex>
          <Text
            color={"#28668D"}
            fontWeight={800}
            fontSize={"6xl"}
            pr={100}
            ml={-5}
          >
            JOB DESCRIPTION
          </Text>
        </Flex>
        <Flex
          px={300}
          py={20}
          textAlign={"center"}
          flexDir={"column"}
          gap={150}
        >
          <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("sv");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                SUPERVISOR
              </Text>
            </Flex>
            <Spacer />
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("pl");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                PROJECT LEADER
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("aero");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                HEAD OF AERODYNAMICS
              </Text>
            </Flex>
            <Spacer />
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("nontek");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                NON-TECH MANAGER
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("structure");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                HEAD OF STRUCTURE
              </Text>
            </Flex>
            <Spacer />
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("system");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                HEAD OF SYSTEM
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} w={"full"}>
            <Flex
              justifyContent={"center"}
              bgColor={"#28668D"}
              borderRadius={100}
              w={"md"}
              py={4}
              cursor={"pointer"}
              _hover={{ bgColor: "#2D83BA" }}
              onClick={() => {
                onOpen();
                setStateModal("dev");
              }}
            >
              <Text
                color={"#E6E7E8"}
                letterSpacing={"0.07em"}
                fontWeight={800}
                fontSize={"2xl"}
              >
                HEAD OF STRATEGIC DEV.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          textAlign={"center"}
          w={"full"}
          justifyContent={"center"}
          py={20}
          px={100}
          flexDir={"column"}
        >
          <Text
            color={"#fff"}
            fontSize={"6xl"}
            letterSpacing={"0.1em"}
            fontWeight={800}
          >
            DOKUMENTASI | KEGIATAN
          </Text>
          <Flex
            py={20}
            justifyContent={"center"}
            alignItems={"center"}
            gap={50}
          >
            <Flex
              boxSize={50}
              bgColor={"#E6E7E8"}
              boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
              borderRadius={"full"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={leftArrowDouble} boxSize={5} />
            </Flex>
            <Flex flexDir={"column"} gap={10} justifyContent={"center"}>
              <Flex w={"full"} h={300} bgColor={"#E6E7E8"}></Flex>
              <Flex gap={10}>
                <Flex boxSize={300} bgColor={"#E6E7E8"}></Flex>
                <Flex boxSize={300} bgColor={"#E6E7E8"}></Flex>
              </Flex>
            </Flex>
            <Flex
              boxSize={50}
              bgColor={"#E6E7E8"}
              boxShadow={"inset 0px 8.94118px 8.94118px rgba(0, 0, 0, 0.25)"}
              borderRadius={"full"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={rightArrowDouble} boxSize={5} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer />

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor={"#E7EBEF"}
          borderRadius={30}
          p={20}
          h={{ sm: "2xl", md: "xl", lg: "md" }}
          boxShadow={
            "0px 4px 4px rgba(0, 0, 0, 0.25), -7.69084px -7.69084px 30.7634px #1C5579, inset -10px -10px 13px rgba(0, 0, 0, 0.2)"
          }
        >
          <ModalCloseButton size={"lg"} />
          <BodyModal type={stateModal} />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default KUDT;
