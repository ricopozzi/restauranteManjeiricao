import { Box, Button, HStack, Image, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react'
import { MdMenu } from 'react-icons/md'

export function Header(){

    const scrollToBottom = () => {
        window.scrollTo({
            top: 1000000,
            behavior:'smooth'
        })
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <Box
        w="100%"
        minH="8vh"  
        backdropFilter="blur(10px)"
        px={{base:'2', md:'8rem'}}
        display="flex"
        position="fixed"
        >
            <Image
            src="/majerica.png"
            boxSize={{base:'12', md:'16'}}
            my="auto"
            borderRadius="full"
            />

            <HStack
            flex='1'
            display={{base:'none', md:'flex'}}
            justifyContent="center"
            spacing={8}
            fontWeight="semibold"
            
            >
                <Box
                w="4rem"
                h="50%"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textColor="gray.600"
                _hover={{
                    textDecoration: 'underline'
                }}
                onClick={scrollTop}
                          
                >Início</Box>
                 <Box
                w="4rem"
                h="50%"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textColor="gray.600"
                _hover={{
                    textDecoration: 'underline'
                }}

                >Cardápio</Box>
                 <Box
                w="7rem"
                h="50%"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
                textColor="gray.600"
                _hover={{
                    textDecoration: 'underline'
                }}
                onClick={scrollToBottom}
 
                >Avaliações</Box>

            </HStack>

            <Box
             flex='1'    
             display={{base:'flex', md:'none'}}
             justifyContent='flex-end'
             alignItems="center"
             pr="4"
           
            >
                <Menu>
                <MenuButton 
                bg="gray.700"  
                p={0} 
                h="40px" 
                w="40px" 
                as={Button}
                _expanded={{bg:'gray.700'}}
                _focus={{bg:'gray.700'}}
                _
                >
                    <Icon as={MdMenu} color="gray.100" m="auto" h="100%" display="flex" my="auto" />
                </MenuButton>
                <MenuList>
                    <MenuItem
                    onClick={scrollTop}
                    >Início</MenuItem>
                    <MenuItem>Cardápio</MenuItem>
                    <MenuItem
                    onClick={scrollToBottom}
                    >Avaliações</MenuItem>
                </MenuList>
                </Menu>

            </Box>

        </Box>
    )
}