import { Box, Flex, Text, Divider, VStack, SimpleGrid, HStack, Button, Image, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
    const isWhiteVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex
            w="100%"
            mb="10"
        >
            <Box
                as="div"
                display="flex"
                justifyContent="space-between"
                backgroundImage='/images/background.png'
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                w="100%"
                h={["200px","335px"]}
                border="1px solid #000000"
                boxSizing="border-box"
                filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
                <Box
                    ml={["8","8","32"]}
                    mt={["14","14","20"]}
                >
                    <Text
                        fontSize={["32px","32px","36px"]}
                        fontWeight="500"
                        lineHeight="54px"
                    >
                        5 Continentes, <br />
                        infinitas possibilidades.
                    </Text>
                    <Text
                        mt="4"
                        fontSize="20px"
                        color="subTitle"
                        lineHeight="7"
                    >
                        Chegou a hora de tirar do papel a viagem que você {isWhiteVersion && <br />} sempre sonhou.
                    </Text>
                </Box>

                <Box
                    mt="20"
                    mr="10%"
                    mb="-10"
                >
                    { isWhiteVersion && <Image src="/images/airplane.png" />}
                </Box>
            </Box>
        </Flex>
    )
}
