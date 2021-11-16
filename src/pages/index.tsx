import { Box, Flex, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Swiper from "../components/Swiper";
import TravelTypes from "../components/TravelTypes";


export default function Home() {

  return (
    <Flex
      display="block"
      w="100%"
      maxWidth={1440}
      mx="auto"
      mt="4"
      h="100vh"
    >
      <Banner />

      <TravelTypes />

      <Box
        borderTop="2px solid #47585B"
        as="hr"
        mx="auto"
        width="24"
        mt="20"
      />

      <Box
        as="div"
        maxWidth={839}
        fontSize="36px"
        color="letters"
        fontWeight="500"
        textAlign="center"
        mx="auto"
        my="12"
      >
        <Text >
          Vamos nessa?
        </Text>
        <Text>
          Então escolha seu continente
        </Text>
      </Box>

      <Swiper />
      <Flex
        height="200px"
      >

      </Flex>
    </Flex>
  )
}
