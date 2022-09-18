import React from 'react';
import { Box, Stack, HStack, VStack, Button, Image, Text} from '@chakra-ui/react';
import InstaLogo from './Images/InstagramLogo.png';
import TwitterLogo from './Images/TwitterLogo.png';
import YoutubeLogo from './Images/YouTubeLogo.png';

const OurFooter = () => {
  return (
<Box width={'90vw'} pl={20} pr={20} pt={20} pb={'50px'} fontSize={['12pt','20pt']}>
        <Stack display={'flex'} justifyContent={'space-evenly'} direction={['column','column','column','row']}>
            <VStack >
                <Text fontSize={['20pt','28pt']} fontWeight={'bold'}>Contact</Text>
                <a href="tel:918-038-2932"><Text>918-038-2932</Text></a>
                <Text><a href="mailto:info@loqui-ai.com">info@loqui-ai.com</a></Text>
            </VStack>
            
            <VStack>
                <Text fontSize={['20pt','28pt']} fontWeight={'bold'}>Visit</Text>
                <Text>Stillwater, OK</Text>
                <Text>74075</Text>
            </VStack>
            <VStack>
                <Text fontSize={['20pt','28pt']} fontWeight={'bold'}>Legal</Text>
                <Text>Term</Text>
                <Text>Privacy</Text>
            </VStack>
            <VStack>
                <Text fontSize={['20pt','28pt']} fontWeight={'bold'}>Social Media</Text>
                <HStack>
                    <a href='https://www.youtube.com/channel/UC6e0Cyd-jn5HQ5xINa8nBhw'><Image src={YoutubeLogo} alt={'insta logo'}  height={['50px','120px']}/></a>                    
                    <a href='https://twitter.com/AiLoqui'><Image src={TwitterLogo} alt={'insta logo'} height={['30px','80px']}/></a>                    
                    <a href='https://www.instagram.com/loqui_ai/'> <Image src={InstaLogo} alt={'insta logo'} height={['30px','80px']}/></a>
                </HStack>
            </VStack>
        </Stack>
    </Box>
  )
}

export default OurFooter