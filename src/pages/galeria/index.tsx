import { Box, Grid, GridItem, Image, Stack, Wrap, WrapItem} from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { ImageContainer } from '../../components/ImageContainer'

export default function Galery(){
    return(
        <>
            <Header />
            <Box
            w="100%"
            minH="100vh"
            pt='9vh'
            bg='white'
            >
                <Box
                w={{base:'100%',md:"90%"}}
                mx="auto"
                h="100%"
                p={8}
                >
                    {/* <Grid
                    w="100%"
                    h="100%"
                    templateColumns={{base:'', md:'repeat(2, 1fr)'}}
                    templateRows={{base:'', md:'repeat(2, 1fr)'}}
                    gap={4}
                    >
                        <GridItem >
                            <ImageContainer src='/majericaestatua.jpg'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='/majericario.jpg'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='/majericaentrada.jpg'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='/majericamesa.jpg'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        
                    </Grid> */}
                    <Wrap w="100%" align="center" spacing="30px" display="flex" justify="center" >
                        <WrapItem 
                        maxW={{base:'80vw',md:"40vw"}}
                        maxH="40vh"
                        >
                            <ImageContainer 
                            src='/majericaestatua.jpg'
                            maxW={{base:'80vw',md:"40vw"}}
                            maxH="40vh" 
                            />
                        </WrapItem>
                        <WrapItem 
                        maxW={{base:'80vw',md:"40vw"}}
                        maxH="40vh" 
                        >
                            <ImageContainer 
                            src='/majericario.jpg'
                            maxW={{base:'100%',md:"40vw"}}
                            maxH="40vh" 
                            />
                        </WrapItem>
                        <WrapItem 
                        maxW={{base:'80vw',md:"40vw"}}
                        maxH="40vh" 
                        >
                            <ImageContainer 
                            src='/majericaentrada.jpg'
                            maxW={{base:'80vw',md:"40vw"}}
                            maxH="40vh" 
                            />
                        </WrapItem>
                        
                    </Wrap>

                </Box>

            </Box>
        </>
    )
}