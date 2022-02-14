import { Box, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function ImagePage(){
    const router = useRouter()
    //const { src } = router.query

    return(
        <Box
        maxW="100vw"
        minH="100vh"
        bg="blackAlpha.800"
        display="flex"
        justifyContent='center'
        alignItems="center"
        flexDir="column"
        py={12}
        >
            <Box
            w="100%"
            h="8vh"
           
            >
                <Button
                ml="12vw"
                bg="green.400"
                onClick={() => router.push('/galeria')}
                >X</Button>

            </Box>
            <Image src="https:/picsum.photos/1200/800" />
            
        </Box>
    )
}