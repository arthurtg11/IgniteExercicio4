import { Text, VStack, Image, Icon, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { VscCircleFilled } from 'react-icons/vsc'
import Link from 'next/link'
interface TypeEachProps {
    image: string;
    text: string;
    href?: string;
}

export default function TypeEach({ image, text, href = "#" }: TypeEachProps) {
    const isWhiteVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    if(!isWhiteVersion)
    return (
            <Text
                color="letters"
                fontWeight="600"
                fontSize="24px"
                my="5"
                mx="auto"
            >
                <Icon as={VscCircleFilled} color="highlight" /> {text}
            </Text >) 
            else
        return (
            <Link href={href}>
                <VStack
                    spacing="5"
                    as="a"
                    cursor="pointer"
                >
                    <Image src={image} />
                    <Text
                        color="letters"
                        fontWeight="600"
                        fontSize="24px"
                    >
                        {text}
                    </Text>
                </VStack>
            </Link>
        )
    
}