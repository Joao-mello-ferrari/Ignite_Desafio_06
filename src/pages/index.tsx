import { Text, Box, Flex } from '@chakra-ui/react'
import { Banner } from '../components/Home/banner'
import { TravelTypes } from '../components/Home/travelTypes'
import { Swiper } from '../components/Home/swiper'


export default function Home() {
  return (
    <Box as="section">
      <Banner />

      <TravelTypes/>

      <Flex className="not-swiper-container" p={["2rem 0 1.5rem","5rem 0 3rem"]} justify="center" flexDir="column" align="center" h="30vh">
        <Box w="6rem" borderBottom="0.25rem solid gray" mb={["0.5rem","3rem"]}></Box>
        <Text textAlign={"center"} fontWeight="500" color="green" fontSize="2.25rem" lineHeight="3.5rem">
          Vamos nessa?
        </Text>
        <Text textAlign={"center"} fontWeight="500" color="green" fontSize="2.25rem" lineHeight="3.5rem">
          Então escolha seu continente!
        </Text>
      </Flex>

      <Swiper />
    </Box>
  )
}
