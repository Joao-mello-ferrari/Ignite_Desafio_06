import { Flex, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import logo from '../../public/assets/Logo.svg'

import Link from 'next/link' 
import { useRouter } from 'next/router'

export function Header(){
  const router = useRouter()

  const { asPath } = router

  let showChevron = true
  if(asPath === "/"){
    showChevron = false
  }
  

  return(
    <Grid
      h="100px"
      p="4" 
      templateRows="1fr"
      templateColumns="repeat(3, 1fr)"
    >
      <GridItem colSpan={1}>
        <Flex h="100%" alignItems="center" justify="center">
          {showChevron && <Link href="/" passHref>
            <ChevronLeftIcon 
              w={10} 
              h={10} 
              color="gray"
              _hover={{cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s"}}
            />
          </Link>}
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <Flex h="100%" alignItems="center" justify="center">
          <Image src={logo} alt="Logo" width={192} height={48}/>
        </Flex>
      </GridItem> 
    </Grid>
  )
}