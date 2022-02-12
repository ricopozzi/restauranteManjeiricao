import { Box, Flex, Heading } from "@chakra-ui/react"
import { TypeFood } from './TypeFood'

export function FoodTypes(){
    return(
        <Box
        w="100%"
        minH="50vh"
        mt="8"
        >
            <Flex
            w={{base:'100%', md:"80%"}}
            minH="50vh"
            mx="auto"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            >
                <TypeFood src="https://www.svgrepo.com/show/31831/bread.svg" text="Porções" />
                <TypeFood src="https://www.svgrepo.com/show/75626/salad.svg" text="Saladas" />
                <TypeFood src="https://www.svgrepo.com/show/323241/shrimp.svg" text="Camarão" />
                <TypeFood src="https://www.svgrepo.com/show/97643/fish.svg" text="Peixes" />
                <TypeFood src="https://www.svgrepo.com/show/307623/meat-dinner-meal-beef.svg" text="Carnes" />
                <TypeFood src="https://www.svgrepo.com/show/84151/bowl-with-vegetables.svg" text="Vegs 🌱" />
                <TypeFood src="https://www.svgrepo.com/show/76266/spaghetti.svg" text="Massas" />
                <TypeFood src="https://www.svgrepo.com/show/6002/rice-bowl.svg" text="Risotos" />
                <TypeFood src="https://www.svgrepo.com/show/118542/cake-slice.svg" text="Sobremesas" />
                <TypeFood src="https://www.svgrepo.com/show/307038/drink-2.svg" text="Bebidas" />




            </Flex>
        </Box>
    )
}