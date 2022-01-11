import { Flex, Box, Text, Image } from '@chakra-ui/react'

export function Banner(){

 
  return(
    <Flex
          backgroundImage="url('/assets/Background.svg')"
          h={["30vh","40vh","60vh"]} 
          position={"relative"}
          bgRepeat="no-repeat"
        > 
          <Box w="50%" h="100%" pl={["2.5rem","4rem","9rem"]} display="flex" alignItems="center" >
            <Box>
              <Text w="80vw" fontWeight="500" fontSize={["1.25rem","2.25rem"]} color="#F5F8FA" lineHeight={["2rem","3rem"]}>
                5 Continentes, infinitas possibilidades
              </Text>
              <Text 
                w="40vw"  
                mt="2.5rem" 
                fontSize={["0.75rem","1.25rem"]}
                color="#DADADA" 
                lineHeight={["1.5rem","2rem"]}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
              </Text>   
            </Box>

          </Box>
          <Image 
            src="/assets/Airplane.svg" 
            alt="avião" 
            h={["8rem","16rem","20rem"]} 
            position={"absolute"} 
            bottom={["-0.6rem","1rem","-2rem"]} 
            right={["0.6rem","3rem","3rem"]}/>
        </Flex>
  )
}