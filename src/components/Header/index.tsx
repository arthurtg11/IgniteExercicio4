import { Flex, IconButton } from "@chakra-ui/react";
import Logo from "./logo";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from 'next/link'


export default function Header(router) {
  const isMain = router.props.asPath == '/';
  console.log(isMain)
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isMain && <Link href="/">
        <IconButton
          aria-label="Leave"
          icon={<MdOutlineKeyboardArrowLeft size="48px" />}
          ml={["10","20","40"]}
          color="black"
          border="1px solid black"
          mr={["36","36","0"]}
        />
      </Link >}
      <Logo isMain={isMain} />
    </Flex>
  )
}
