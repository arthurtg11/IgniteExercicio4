import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
    colors: {
        white:{
            "100": "#F5F8FA",
            "50": "#FFFFFF"
        },
        highlight:"#FFBA08",
        letters:"#47585B",
        lettersWhite:"#999999",
        subTitle:"#C4C4C4",
    },

    fonts:{
        heading: 'Poppins',
        body: 'Poppins',
    },
    

    styles: {
        global: {
            body:{
                bg: 'white.100',
                color: 'white.100',
            }
        }
    }
})