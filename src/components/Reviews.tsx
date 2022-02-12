import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

export function Reviews(){
    return(
        <Box
        w="100%"
        minH="60vh"
        >
            <Heading
            mx='auto'
            textAlign="center"
            textColor="green.600"
            mt={{base:'8', md:'0'}}
            >Avaliações</Heading>
            <Flex
            w={{base:'92%',md:"75%"}}
            minH="50vh"
            mx="auto"
            justifyContent="center"
            alignItems='center'
            mt={{base:'8', md:'0'}}
            >
                <Stack
                w="100%"
                h='100%'
                direction={{base:'column', md:'row'}}
                spacing={8}

                >
                    <Flex
                    bg="white"
                    minH="40vh"
                    w={{base:'100%',md:"32%"}}
                    borderRadius="lg"
                    boxShadow="xl"
                    transition="200ms ease-in-out"
                    _hover={{
                        transform: 'scale(1.03)'
                    }}
                    p={{base:1, md:4}}
                    flexDir="column"
                    >
                        <Heading
                        textAlign="center"
                        fontSize="2xl"
                        >Muito Bom</Heading>
                        <Text
                        p={4}
                        textAlign="center"
                        textColor="gray.500"
                        fontSize="sm"
                        >Fomos vários dias ao Manjericão durante nossa estadia em Ilhabela pois foi um dos melhores restaurantes que experimentamos.
                        Provamos o camarão na moranga (~190 reais), que é muito bom e serve tranquilamente 3 pessoas. Diversos pratos executivos (~40 reais) com bastante variedade de proteína.
                        Gostamos bastante e recomendamos.

                        </Text>
                        <Avatar 
                        src="https://media-cdn.tripadvisor.com/media/photo-l/21/f0/3a/6a/angelinegm.jpg" 
                        mx="auto"
                        w="64px"
                        h="64px"
                        />
                        <Stack
                        direction="row"
                        mx="auto"
                        mt="auto"
                        >
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                        </Stack>

                    </Flex>
                    <Flex
                    bg="white"
                    minH="40vh"
                    w={{base:'100%',md:"32%"}}
                    borderRadius="lg"
                    boxShadow="xl"
                    transition="200ms ease-in-out"
                    _hover={{
                        transform: 'scale(1.03)'
                    }}
                    p={{base:1, md:4}}
                    flexDir="column"
                    >
                        <Heading
                        textAlign="center"
                        fontSize="2xl"
                        >Prato executivo farto e saboroso</Heading>
                        <Text
                        p={4}
                        textAlign="center"
                        textColor="gray.500"
                        fontSize="sm"
                        >O restaurante tem cardápio variado e o ambiente é lindo. Ótimo atendimento e o prato executivo é saboroso, farto e ótimo de valor.

                        </Text>
                        <Avatar 
                        src="https://media-cdn.tripadvisor.com/media/photo-l/18/ab/63/48/suzibopp.jpg" 
                        mx="auto"
                        w="64px"
                        h="64px"
                        mt='auto'
                        />
                        <Stack
                        direction="row"
                        mx="auto"
                        mt="auto"
                        >
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                        </Stack>

                    </Flex>
                    <Flex
                    bg="white"
                    minH="40vh"
                    w={{base:'100%',md:"32%"}}
                    borderRadius="lg"
                    boxShadow="xl"
                    transition="200ms ease-in-out"
                    _hover={{
                        transform: 'scale(1.03)'
                    }}
                    p={{base:1, md:4}}
                    flexDir="column"
                    >
                        <Heading
                        textAlign="center"
                        fontSize="2xl"
                        >Jantar no jardim</Heading>
                        <Text
                        p={4}
                        textAlign="center"
                        textColor="gray.500"
                        fontSize="sm"
                        >Nossa segunda vez no local, jardim muito bonito e agradável, vale a pena escolher as mesas externas. Os pratos muito saborosos e excelente atendimento. Vale começar com a casquinha de camarão que é espetacular.

                        </Text>
                        <Avatar 
                        src="https://media-cdn.tripadvisor.com/media/photo-l/21/f7/5f/95/luisguilhermemacedo.jpg" 
                        mx="auto"
                        w="64px"
                        h="64px"
                        mt="auto"
                        />
                        <Stack
                        direction="row"
                        mx="auto"
                        mt="auto"
                        >
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                            <AiFillStar color="green" />
                        </Stack>

                    </Flex>

                </Stack>

            </Flex>

        </Box>
    )
}