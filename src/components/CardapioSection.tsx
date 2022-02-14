import { Box, Image, Heading, Button, Text, VStack } from '@chakra-ui/react'

export function CardapioSection(){
    return(
        <Box
        minH="70vh"
        w="100%"
        px="4"
        py="4"
        display="flex"
        flexDir={{base:'column', md:'row'}}
        >
            <Image loading="lazy" display={{base:'none', md:'flex'}} w="55%" src="https://blog.bonitour.com.br/wp-content/uploads/2021/09/Blog-Comidas-Tipicas-Bonitour-Viagens_Destaque-08.jpg" />
            <VStack
            flex="1"
            minH="70vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            spacing={5}
            >
                <Heading textAlign="center" >Conheça o nosso cardápio!</Heading>
                <Text fontWeight="normal" fontSize="larger" w={{base:'90%',md:"60%"}} >O Manjeiricão possui um amplo cardápio, com comidas e bebidas diferenciadas, feitas com os melhores ingredientes e pratos bem servidos.</Text>
                <Button
                bg="green.500"
                textColor="white"
                size="lg"
                _hover={{
                    bg:'green.600'
                }}
                >Ver Cardápio</Button>
            </VStack>
            <Image display={{base:'flex', md:'none'}} w="100%" src="https://blog.bonitour.com.br/wp-content/uploads/2021/09/Blog-Comidas-Tipicas-Bonitour-Viagens_Destaque-08.jpg" />
        </Box>
    )
}