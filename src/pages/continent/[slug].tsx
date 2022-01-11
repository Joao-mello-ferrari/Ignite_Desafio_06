import { useRouter } from 'next/router'

import { createServer } from 'miragejs'

import { Image, Box, Text, Flex, SimpleGrid, HStack, useMediaQuery } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

createServer({
  routes() {
    this.passthrough('/_next/static/development/_devPagesManifest.json');
    this.get("/api/europe", () => ({
      country:{
        name: "Europa",
        image: "https://s27363.pcdn.co/wp-content/uploads/2020/05/Central-Europe-Itinerary.jpg.optimal.jpg"
      },
      cities: [
        { id: 1, name: "Londres", country: "Reino Unido", image: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg", countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"},
        { id: 2, name: "Paris", country: "França", image: "https://images.unsplash.com/photo-1484040621146-0489fea31af2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", countryFlag: "https://ae01.alicdn.com/kf/HTB10AL6LpXXXXbCXXXXq6xXFXXXs/new-large-french-flag-great-france-poly-banner-flag-5-3FT-90-150cm-france-flag-national.jpg_Q90.jpg_.webp" },
        { id: 3, name: "Roma", country: "Itália", image: "https://images.unsplash.com/photo-1621410780263-552901f401f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9tZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", countryFlag: "https://bestswimming.swimchannel.net/wp-content/uploads/2020/01/italy-italia-flag-of-italy-italian-flag-flag.jpg" },
        { id: 4, name: "Praga", country: "República Tcheca", image: "https://images.unsplash.com/photo-1615529610458-1801dfce0a6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGN6ZWNoJTIwcmVwdWJsaWN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", countryFlag:"https://images-na.ssl-images-amazon.com/images/I/51jfcJbnW1L._AC_SY355_.jpg" },
        { id: 5, name: "Amsterdã", country: "Holanda", image: "https://images.unsplash.com/photo-1549361065-d20376958026?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtc3RlcmRhbXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", countryFlag: "https://images-na.ssl-images-amazon.com/images/I/21WMHeDOcIL._AC_.jpg" },
      ],
    })),

    this.get("/api/southAmerica", () => ({
      cities: [
        { id: 1, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 2, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 3, name: "Roma", country: "", image: "", countryFlag: "" },
        { id: 4, name: "Praga", country: "", image: "", countryFlag: "" },
        { id: 5, name: "Amsterdã", country: "", image: "", countryFlag: "" },
      ],
    })),

    this.get("/api/northAmerica", () => ({
      cities: [
        { id: 1, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 2, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 3, name: "Roma", country: "", image: "", countryFlag: "" },
        { id: 4, name: "Praga", country: "", image: "", countryFlag: "" },
        { id: 5, name: "Amsterdã", country: "", image: "", countryFlag: "" },
      ],
    })),
    
    this.get("/api/africa", () => ({
      cities: [
        { id: 1, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 2, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 3, name: "Roma", country: "", image: "", countryFlag: "" },
        { id: 4, name: "Praga", country: "", image: "", countryFlag: "" },
        { id: 5, name: "Amsterdã", country: "", image: "", countryFlag: "" },
      ],
    })),

    this.get("/api/australia", () => ({
      cities: [
        { id: 1, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 2, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 3, name: "Roma", country: "", image: "", countryFlag: "" },
        { id: 4, name: "Praga", country: "", image: "", countryFlag: "" },
        { id: 5, name: "Amsterdã", country: "", image: "", countryFlag: "" },
      ],
    })),

    this.get("/api/asia", () => ({
      cities: [
        { id: 1, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 2, name: "paris", country: "", image: "", countryFlag: "" },
        { id: 3, name: "Roma", country: "", image: "", countryFlag: "" },
        { id: 4, name: "Praga", country: "", image: "", countryFlag: "" },
        { id: 5, name: "Amsterdã", country: "", image: "", countryFlag: "" },
      ],
    }))
  },
})

interface City{
  id: number; 
  name: string; 
  country: string; 
  image: string; 
}

interface Country { 
  name: string; 
  image: string; 
}

// Para implementar em um projeto real
// interface ContinentProps{
//   data:{
//     country: { name: string; image: string; },
//     cities: City[]
//   }
// }

export default function Continent(){
  const [cities, setCities] = useState<City[]>([])
  const [country, setCountry] = useState<Country>({} as Country)

  const [isMobileSize] = useMediaQuery('(max-width: 480px)')

  const router = useRouter()
  useEffect(()=>{
    const slug = router.asPath.split('/').pop()
    if(slug === "[slug]"){ return }
    
    fetch(`/api/${slug}`)
      .then(response=>response.json())
      .then(data=>{
        setCities(data.cities)
        setCountry(data.country)
      })
  },[router.asPath])

  return(
    
    <Box as="main">
      <Box>
        <Image h="32rem" w="100%" src={country.image} alt={country.name}/>
        <Text fontWeight="600" color="#F5F8FA" fontSize="3rem" m="-8rem 0 8rem" pl="8rem">
          {country.name}
        </Text>
      </Box>

      <Box px={["3rem","6rem"]}>
        <Flex align="center" flexDir={["column","column","row"]}>
          <Text color="green" fontSize="1.5rem" lineHeight="2.25rem" textAlign="justify"  w={["100vw", "100%"]} p={["1.5rem","0rem"]}>
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa geralmente 
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, 
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
          <HStack spacing={["2rem","6rem"]} ml={["0","0","6rem"]} padding={["2rem","0"]} mt={["0","1rem","0"]}>
            <Flex flexDir="column" align="center">
              <Text color="yellow" fontWeight="600" fontSize={["2rem","3rem"]}>50</Text>
              <Text color="green" fontWeight="500" fontSize="1.5rem">países</Text>
            </Flex>
            <Flex flexDir="column" align="center">
              <Text color="yellow" fontWeight="600" fontSize={["2rem","3rem"]}>60</Text>
              <Text color="green" fontWeight="500" fontSize="1.5rem">línguas</Text>
            </Flex>
            <Flex flexDir="column" align="center">
              <Text color="yellow" fontWeight="600" fontSize={["2rem","3rem"]}>+100</Text>
              <Text color="green" fontWeight="500" fontSize="1.5rem">cidades</Text>
            </Flex>
            
          </HStack>
        </Flex>

        <Box m={["3rem 0 5rem", "6rem 0 20rem"]}>
          <Text fontWeight="500" fontSize="2.5rem" color="green" mb={["2rem","4rem"]}>Cidades +100</Text>
          <SimpleGrid minChildWidth="16rem" spacing="3rem" justify="center">
            <Box h="100%">
              <Image src={country.image} alt={country.name} borderTopRadius="10px"/>
              <Flex justify="space-between" align="center" p="2rem 2rem" border="1px solid #FFBA08" borderTop="0" borderBottomRadius="10px">
                <Box>
                  <Text fontSize="1.25rem" color="green" fontWeight="500">Londres</Text>
                  <Text mt="0.5rem">Reino Unido</Text>
                </Box>
                <Image boxSize="3rem" borderRadius="full" src={country.image} alt={country.name} />
              </Flex>
            </Box>
            <Box h="100%">
              <Image src={country.image} alt={country.name} borderTopRadius="10px"/>
              <Flex justify="space-between" align="center" p="2rem 1.25rem" border="1px solid #FFBA08" borderTop="0" borderBottomRadius="10px">
                <Box>
                  <Text fontSize="1.25rem" color="green" fontWeight="500">Londres</Text>
                  <Text mt="0.5rem">Reino Unido</Text>
                </Box>
                <Image boxSize="2rem" borderRadius="full" src={country.image} alt={country.name} />
              </Flex>
            </Box>
            <Box h="100%">
              <Image src={country.image} alt={country.name} borderTopRadius="10px"/>
              <Flex justify="space-between" align="center" p="2rem 1.25rem" border="1px solid #FFBA08" borderTop="0" borderBottomRadius="10px">
                <Box>
                  <Text fontSize="1.25rem" color="green" fontWeight="500">Londres</Text>
                  <Text mt="0.5rem">Reino Unido</Text>
                </Box>
                <Image boxSize="2rem" borderRadius="full" src={country.image} alt={country.name} />
              </Flex>
            </Box>
            <Box h="100%">
              <Image src={country.image} alt={country.name} borderTopRadius="10px"/>
              <Flex justify="space-between" align="center" p="2rem 1.25rem" border="1px solid #FFBA08" borderTop="0" borderBottomRadius="10px">
                <Box>
                  <Text fontSize="1.25rem" color="green" fontWeight="500">Londres</Text>
                  <Text mt="0.5rem">Reino Unido</Text>
                </Box>
                <Image boxSize="2rem" borderRadius="full" src={country.image} alt={country.name} />
              </Flex>
            </Box>
            <Box h="100%" >
              <Image src={country.image} alt={country.name} borderTopRadius="10px"/>
              <Flex justify="space-between" align="center" p="2rem 1.25rem" border="1px solid #FFBA08" borderTop="0" borderBottomRadius="10px">
                <Box>
                  <Text fontSize="1.25rem" color="green" fontWeight="500">Londres</Text>
                  <Text mt="0.5rem">Reino Unido</Text>
                </Box>
                <Image boxSize="2rem" borderRadius="full" src={country.image} alt={country.name} />
              </Flex>
            </Box>
            <Box h="100%" >
              <Image src={country.image} alt={country.name} borderTopRadius="10px"/>
              <Flex justify="space-between" align="center" p="2rem 1.25rem" border="1px solid #FFBA08" borderTop="0" borderBottomRadius="10px">
                <Box>
                  <Text fontSize="1.25rem" color="green" fontWeight="500">Londres</Text>
                  <Text mt="0.5rem">Reino Unido</Text>
                </Box>
                <Image boxSize="2rem" borderRadius="full" src={country.image} alt={country.name} />
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
    )
}

// Para implementar em um projeto real
// export const getStaticPaths:GetStaticPaths = ()=>{
//   return{
//     paths: [],
//     fallback: "blocking"
//   }
// } 

// Para implementar em um projeto real
// export const getStaticProps:GetStaticProps = async(req)=>{
//   const response = await fetch(`/api/${req.params.slug}`)
//   const data = await response.json()
  
//   return{
//     props:{ data },
//     revalidade: 60 * 60 * 12 // 12 hours
//   }
// }

