import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '58em',
  lg: '62em',
  xl: '80em',
  // '2xl': '96em',
})

export const theme = extendTheme({
  colors:{
    black: "#000000",
    gray: "#999999",
    green: "#47585B",
    yellow: "#FFBA08"
  },

  fonts:{
    heading: "Poppins",
    body: "Poppins",
  },

  styles:{
    global:{
      body:{
        color:"gray"
      }
    }
  },
  breakpoints

})