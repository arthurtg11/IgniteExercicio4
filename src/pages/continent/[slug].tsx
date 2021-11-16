import { Box, Flex, Text, HStack, VStack, useBreakpointValue } from "@chakra-ui/react";
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import CityCart from "../../components/CityCart";

type PostsProps = {
  continent: {
    id: string;
    banner: string;
    countrys: number;
    languages: number;
    numberCitys: number;
    messageText: string;
    citys: [
      {
        id: number;
        city: string;
        contry: string;
        img: string;
        symbol: string;
      }
    ]
  }
}


export default function Continent({ continent }: PostsProps) {
  const isWhiteVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  if (continent.id) {
    return (
      <Flex
        display="block"
        w="100%"
        mt="4"
        h="100vh"
        maxWidth={1440}
        mx="auto"
        color="letters"
      >
        <Box
          as="div"
          display="flex"
          backgroundImage={continent.banner}
          backgroundPosition="left"
          backgroundRepeat="no-repeat"
          width="100%"
          maxWidth={"100vw"}
          height={500}
        >
        </Box>
        <Flex
          mt="16"
          px={["4", "4", "32"]}
          maxWidth={1440}
          display="block"
        >
          {isWhiteVersion ?
            <HStack>
              <Box
                maxWidth="600"
              >
                <Text
                  fontSize="24px"
                  lineHeight="36px"
                  textAlign="justify"
                >{continent.messageText}</Text>
              </Box>
              <HStack
                px="20"
                spacing="10"
                width="100%"
                fontWeight="600"
                textAlign="center"
              >
                <Box >
                  <Text
                    fontSize="48px"
                    lineHeight="68px"
                    color="highlight"
                  >{continent.countrys}</Text>
                  <Text
                    fontSize="24px"
                    lineHeight="36px"
                  >países</Text>
                </Box>
                <Box>
                  <Text
                    fontSize="48px"
                    lineHeight="68px"
                    color="highlight"
                  >{continent.languages}</Text>
                  <Text
                    fontSize="24px"
                    lineHeight="36px"
                  >línguas</Text>
                </Box>
                <Box>
                  <Text
                    fontSize="48px"
                    lineHeight="68px"
                    color="highlight"
                  >{continent.numberCitys}</Text>
                  <Text
                    fontSize="24px"
                    lineHeight="36px"
                  >cidades +100</Text>
                </Box>
              </HStack>

            </HStack>
            :
            <VStack>
              <Box
                mb="10"
              >
                <Text
                  fontSize="24px"
                  lineHeight="36px"
                  textAlign="justify"
                >{continent.messageText}</Text>
              </Box>
              <HStack
                mx="auto"
                justifyContent="center"
                spacing="10"
                width="100%"
                fontWeight="600"
                textAlign="center"
              >
                <Box >
                  <Text
                    fontSize="48px"
                    lineHeight="68px"
                    color="highlight"
                  >{continent.countrys}</Text>
                  <Text
                    fontSize="24px"
                    lineHeight="36px"
                  >países</Text>
                </Box>
                <Box>
                  <Text
                    fontSize="48px"
                    lineHeight="68px"
                    color="highlight"
                  >{continent.languages}</Text>
                  <Text
                    fontSize="24px"
                    lineHeight="36px"
                  >línguas</Text>
                </Box>
                <Box>
                  <Text
                    fontSize="48px"
                    lineHeight="68px"
                    color="highlight"
                  >{continent.numberCitys}</Text>
                  <Text
                    fontSize="24px"
                    lineHeight="36px"
                  >cidades +100</Text>
                </Box>
              </HStack>

            </VStack>}
          <Box
            mt="20"
            fontSize="36px"
            fontWeight="500"
          >
            <Text>Cidades +100</Text>
            <CityCart citys={continent.citys} />
          </Box>
        </Flex>

      </Flex>
    )
  }
  else {
    return (<Flex
      display="flex"
      w="100%"
      h="50vh"
      color="letters"
      alignItems="center"
      justifyContent="center"
    ><Text fontSize="large">Not found</Text></Flex>)
  }

}
export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const { slug } = params
  let continent = null;

  const URL_AUTHORS = `http://localhost:3000/continent/${slug}`;


  await fetch(URL_AUTHORS).then((resp) => resp.json())
    .then(function (data) {
      continent = data;
    })
    .catch((error) => {
      return error
    })



  return {
    props: {
      continent,
    }
  }
}