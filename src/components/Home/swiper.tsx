import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Swiper(){
  const router = useRouter();

  const [isMobileSize] = useMediaQuery('(max-width: 480px)')

  return(
      <ReactSwiper
        pagination={{
          "clickable": true
        }}
        navigation={true}
      >
        <SwiperSlide >
          <Flex 
            onClick={()=>{router.push('/continent/europe')}}
            backgroundImage="url('/assets/continents/europe.jpg')" 
            bgSize="77.5rem"
            bgPos="center"
            w="100%"
            h="100%"
            flexDir="column"
            justify="center"
            align="center"
          >
            <Text fontWeight="700" fontSize={["2.5rem","3rem"]}>Europa</Text>
            <Text fontSize={["1.2rem","2rem"]}>O continent mais antigo.</Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex 
              backgroundImage="url('assets/continents/southAmerica.jpg')" 
              bgSize="77.5rem"
              bgPos="center"
              w="100%"
              h="100%"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Text fontWeight="700" fontSize={["2.5rem","3rem"]} textAlign={"center"} >América <br/>do Sul</Text>
              <Text fontSize={["1.2rem","2rem"]}>O continente das praias.</Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex 
              backgroundImage="url('assets/continents/northAmerica.jpg')"
              bgSize="77.5rem"
              bgPos="center"
              w="100%"
              h="100%"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Text fontWeight="700" fontSize={["2.5rem","3rem"]} textAlign={"center"}>América do <br/>Norte</Text>
              <Text fontSize={["1.2rem","2rem"]}>O coração do desenvolvimento.</Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
        <Flex 
            backgroundImage="url('assets/continents/africa.jpg')"
            bgSize="77.5rem"
            bgPos="center"
            w="100%"
            h="100%"
            flexDir="column"
            justify="center"
            align="center"
          >
            <Text fontWeight="700" fontSize={["2.5rem","3rem"]}>África</Text>
            <Text fontSize={["1.2rem","2rem"]}>O continente das savanas.</Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex 
              backgroundImage="url('assets/continents/australia.jpg')"
              bgPos="center"
              bgSize="77.5rem"
              w="100%"
              h="100%"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Text fontWeight="700" fontSize={["2.5rem","3rem"]}>Oceania</Text>
              <Text fontSize={["1.2rem","2rem"]}>O lugar dos arquiélagos</Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex 
              backgroundImage="url('assets/continents/asia.jpg')"
              bgSize="77.5rem"
              w="100%"
              h="100%"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Text fontWeight="700" fontSize={["2.5rem","3rem"]}>Ásia</Text>
              <Text fontSize={["1.2rem","2rem"]}>O berço da culotura oriental</Text>
          </Flex>
        </SwiperSlide>
        
    </ReactSwiper> 
  )
}