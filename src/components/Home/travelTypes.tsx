import { HStack, Box, Text, SimpleGrid, Image, useMediaQuery } from '@chakra-ui/react'



export function TravelTypes(){
  const [isMobileSize] = useMediaQuery('(max-width: 480px)');

  return(<>
    <SimpleGrid minChildWidth="8rem" spacing={["2rem","5rem"]} justifyContent="center" mt="1.25rem" p="1rem">

      <Box  display="flex" flexDir="column" alignItems="center" w="10.2rem">
        <Image src="/assets/travelTypes/cocktail.svg" alt="vida noturna" h={[10,20]}/>
        <Text fontWeight="600" fontSize="1.5rem" color="green" mt="1rem">vida noturna</Text>
      </Box>

      <Box display="flex" flexDir="column" alignItems="center" w="10.2rem">
        <Image src="/assets/travelTypes/surf.svg" alt="praia" h={[10,20]}/>
        <Text fontWeight="600" fontSize="1.5rem" color="green" mt="1rem">praia</Text>
      </Box>

      <Box display="flex" flexDir="column" alignItems="center" w="10.2rem">
        <Image src="/assets/travelTypes/building.svg" alt="moderno" h={[10,20]}/>
        <Text fontWeight="600" fontSize="1.5rem" color="green" mt="1rem">moderno</Text>
      </Box>

      <Box display="flex" flexDir="column" alignItems="center" w="10.2rem">
        <Image src="/assets/travelTypes/museum.svg" alt="clássico" h={[10,20]}/>
        <Text fontWeight="600" fontSize="1.5rem" color="green" mt="1rem">clássico</Text>
      </Box>

      { !isMobileSize &&
        <Box display="flex" flexDir="column" alignItems="center" w="10.2rem">
          <Image src="/assets/travelTypes/earth.svg" alt="e mais" h={[10,20]}/>
          <Text fontWeight="600" fontSize="1.5rem" color="green" mt="1rem">e mais...</Text>
        </Box>
      }
    </SimpleGrid>
    
    { isMobileSize &&
      <Box display="flex" justifyContent="center" mt="1rem">
        <Box display="flex" flexDir="column" alignItems="center" w="10.2rem">
          <Image src="/assets/travelTypes/earth.svg" alt="e mais" h={[10,20]}/>
          <Text fontWeight="600" fontSize="1.5rem" color="green" mt="1rem">e mais...</Text>
        </Box>
      </Box>
    }
    </>
  )
}