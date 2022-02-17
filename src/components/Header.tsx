import { Box, Button, HStack, Image, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react'
import { MdMenu } from 'react-icons/md'
import { animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router' 
import { useState } from 'react'

export function Header(){
    const router = useRouter()
    const [ href, setHref ] = useState('#')

    const scrollToBottom = () => {
        scroll.scrollToBottom()
    }

    const scrollTop = () => {
        if(router.pathname == "/"){
            scroll.scrollToTop()
        } else {
            setHref('/')
        }
       
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
            src="majerica.png"
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
                as="a"
                w="7rem"
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
                href={href}
                >Início</Box>
                 <Box
                w="7rem"
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
                textColor="gray.600"
                _hover={{
                    textDecoration: 'underline'
                }}
                onClick={scrollToBottom}
 
                >Avaliações</Box>

                <Box
                w="7rem"
                h="50%"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textColor="gray.600"
                _hover={{
                    textDecoration: 'underline'
                }}
                onClick={() => router.push('/galeria')}
 
                >Galeria</Box>

            </HStack>

            <Box
             flex='1'    
             display={{base:'flex', md:'none'}}
             justifyContent='flex-end'
             alignItems="center"
             pr="4"
             zIndex={1}
           
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
                <MenuList 
                bg="white">
                    <MenuItem
                    onClick={scrollTop}
                    as="a"
                    href={href}
                    
                    >Início</MenuItem>
                    <MenuItem>Cardápio</MenuItem>
                    <MenuItem
                    onClick={scrollToBottom}
                    >Avaliações</MenuItem>
                    <MenuItem
                        onClick={() => router.push('/galeria')}
                        >
                    Galeria
                </MenuItem>
                </MenuList>
                
                </Menu>

            </Box>

        </Box>
    )
}