import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const theme: ThemeConfig = extendTheme({
    styles:{
        global:{
            'html, body' : {
               bg:'white',
               textColor:'gray.800'
            }
        }
    },
    fonts:{
        heading: 'Poppins',
        body: 'Poppins'
    }
})