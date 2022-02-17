import { Box, Heading, Text, Image } from '@chakra-ui/react'
import { CardapioSection } from '../components/CardapioSection'
import { FoodTypes } from '../components/FoodTypes'
import { Header } from '../components/Header'
import {Reviews } from '../components/Reviews'


export default function Home(){
  return(
    <>
      <Header />
      <Box
      w="100%"
      minH="70vh"
      pt="8vh"
      bg="white"
      >
        <Box
        w="100%"
        h="100%"
        mx="auto"
        px="4"
        display="flex"
        flexDir={{base:'column', md:'row'}}
        >
          <Box
          w={{base:'100%',md:"50%"}}
          h={{md:'70vh'}}
          mt={{base:'10'}}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDir="column"
          pl={{md:20}}
          >
            <Heading
            w="100%"
            fontWeight="semibold"
            fontSize={{base:'2rem',md:"5rem"}}
            textColor="CaptionText"
            >Manjeiricão</Heading>
            <Text
            w={{base:'100%', md:"50%"}}
            mt="4"
            fontSize="larger"
            >Há mais de uma década servindo e surpreendendo!</Text>
            <Text
            w="100%"
            mt="4"
            fontSize="larger"
            textColor="green.600"
            fontWeight="medium"
            >Aberto das 11h30 às 22h, exceto às quartas.</Text>

          </Box>
          <Box
          w={{base:'100%', md:"50%"}}
          h={{base:'30vh',md:"70vh"}}
          display="flex"
          mt="4"
          >
            <Image
            src="http://tasteandtickets.com/wp-content/uploads/2019/05/Capturar-1.png"
            my='auto'
            w="100%"
            loading="lazy"
            
            />

          </Box>

        </Box>

      </Box>
      <CardapioSection />
      <FoodTypes />
      <Reviews />
      <Box
      display={{base:'flex', md:'none'}}
      w="100%"
      h="7vh"
      >

      </Box>
     
    </>
  )
}