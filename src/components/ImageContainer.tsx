import { Box, Flex, Image, Modal, ModalContent, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

interface ImageProps {
    src: string
}

export function ImageContainer({src, ...rest}: ImageProps){
    const router = useRouter()

    const handleClick = () => {
        router.push(`/galeria/1`)
    }

    return(
        <>
            <Image 
            borderRadius="lg"  
            src={src}
            cursor="pointer"
            transition="150ms ease"
            loading="lazy"
            _hover={{
                filter: 'brightness(.8)'
            }}
            onClick={handleClick}
            {...rest} 
            />
        </>
    )
}