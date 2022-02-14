import { Box, Grid, GridItem, Image, Stack} from '@chakra-ui/react'
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
            >
                <Box
                w={{base:'100%',md:"80%"}}
                mx="auto"
                h="100%"
                p={8}
                >
                    <Grid
                    w="100%"
                    h="100%"
                    templateColumns={{base:'', md:'repeat(2, 1fr)'}}
                    templateRows={{base:'', md:'repeat(2, 1fr)'}}
                    gap={4}
                    >
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        <GridItem >
                            <ImageContainer src='https://picsum.photos/1200/600'  />
                        </GridItem>
                        
                    </Grid>

                </Box>

            </Box>
        </>
    )
}