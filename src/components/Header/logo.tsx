import { Flex, Image } from "@chakra-ui/react";

export default function Logo({isMain}) {
    console.log(isMain)
    return (
        <Flex p="2.5" justifyContent="center" maxWidth={1440} width="100%" ml = {isMain ? '0' : '-40'}>
            <Image src="/images/logo.png" />
        </Flex>
    )
}
