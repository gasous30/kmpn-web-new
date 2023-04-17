import { Box, Flex, Text } from "@chakra-ui/react";

import bg from "../../asset/bg/senator.png";

const Senator = () => {
  return (
    <Box w={"full"}>
      <Flex bg={`url(${bg})`}>
        <Text>BADAN KESENATORAN</Text>
      </Flex>
    </Box>
  );
};

export default Senator;
