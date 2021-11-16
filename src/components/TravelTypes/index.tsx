import { Flex, HStack, Box, useBreakpointValue } from "@chakra-ui/react";
import Link from 'next/link'
import TypeEach from "./typeEach";

export default function TravelTypes() {
    const isWhiteVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex
            w="100%"
            mt={["12", "12", "24"]}
            maxWidth={1160}
            mx="auto"
            px="5"
        >
            {isWhiteVersion
                ?
                <HStack
                    w="100%"
                    spacing="32"
                >
                    <TypeEach text="vida noturna" image="images/cocktail1.png" />
                    <TypeEach text="praia" image="images/surf1.png" />
                    <TypeEach text="moderno" image="images/building1.png" />
                    <TypeEach text="clássico" image="images/museum1.png" />
                    <TypeEach text="e mais..." image="images/earth1.png" />
                </HStack>
                :
                <Box
                    width="100%"
                    mx="auto"
                    height="160px"
                >
                    <Flex
                        justifyContent="space-between"
                    >
                        <TypeEach text="vida noturna" image="images/cocktail1.png" />
                        <TypeEach text="praia" image="images/surf1.png" />
                    </Flex>
                    <Flex
                        justifyContent="space-between"
                    >
                        <TypeEach text="moderno" image="images/building1.png" />
                        <TypeEach text="clássico" image="images/museum1.png" />
                    </Flex>

                    <Flex

                    >
                        <TypeEach text="e mais..." image="images/earth1.png" />
                    </Flex>

                </Box>
            }
        </Flex>
    )
}
