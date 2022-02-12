import { Avatar, Box, Text, Image } from '@chakra-ui/react'

interface TFProps{
    src: string
    text: string
}

export function TypeFood({ src, text ,...rest }: TFProps){
    return(
        <Box
        w="10rem"
        h="8rem"
        display="flex"
        flexDir="column"
        justifyContent="space-beetween"
        alignItems="center"
        p={4}
        >
            <Image src={src} maxW="64px" maxH="64px" bg="none" {...rest}/>
            <Text mt="auto">{text}</Text>

        </Box>
    )
}