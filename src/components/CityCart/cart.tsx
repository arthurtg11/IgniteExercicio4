import { Box, Text, HStack, Image } from "@chakra-ui/react";

interface CartProps {
    image: string;
    city: string;
    country: string;
    icon: string;
}

export default function Cart({ image, city, country, icon }: CartProps) {
    return (
        <Box
            display="block"
            bgColor="white.50"

        >
            <Box>
                <Image src={image} width="100%" />
            </Box>
            <HStack justifyContent="space-between" minHeight={106} border="1px solid rgba(255, 186, 8, 0.5)" borderBottomRadius="10">
                <Box display="block" ml="5" >
                    <Text lineHeight="25px" mb="3">{city}</Text>
                    <Text lineHeight="26px" fontSize="16px" color="lettersWhite">{country}</Text>
                </Box>
                <Image src={icon} pr="6" />
            </HStack>
        </Box>
    )
}
