import { Box, Text, VStack } from "@chakra-ui/react";
import Link from 'next/link'

interface SwiperImageProps {
    image: string;
    textTitle: string;
    textSubtitle: string
}

export default function SwiperImage({ image, textTitle, textSubtitle }: SwiperImageProps) {
    return (

        <Box
            as="div"
            display="flex"
            backgroundImage={image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
        >
            <VStack >
                <Link href={`/continent/${textTitle.toLowerCase().trim().replace(/[á]/g,'a').replace(/\s/g, '')}`}>
                <Text
                    cursor="pointer"
                    bg="transparent"
                    fontSize="48"
                    fontWeight="700"
                    lineHeight="72px"
                    color="white.100"
                >
                    {textTitle}
                </Text>
            </Link>
            <Text
                bg="transparent"
                fontSize="16"
                fontWeight="700"
                lineHeight="36px"
                color="white.100"
            >
                {textSubtitle}
            </Text>

        </VStack>

        </Box >

    )
}

