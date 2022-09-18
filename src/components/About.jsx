import React from 'react';
import { Box, Stack,HStack, VStack, Button, Image,Text, AspectRatio } from '@chakra-ui/react';
import AboutImg from './Images/AboutImg.png';


const About = () => {
  return (
    <VStack width={'90vw'} pl={[0,0,10,20]} pr={[0,0,10,20]} pt={[5,5,20,20]}>
        <Box p={5}>
            <Text color={'white'} 
            fontSize={['2xl','2xl','6xl','8xl']}
            fontFamily={'arial'}
            fontWeight={'bold'} p={[0,0,10,20]} 
            textAlign={'left'} width={'90vw'} >About</Text></Box>
        <Stack display={'flex'} direction={['column','column','column','row']}>
            <Image src={AboutImg}  width={['','','720px','1080px']} height={['','','480px','720px']} alt='made with Dalle-2, "the creation" robot human' /> 
            <Text fontSize={['10pt','10pt','15.5pt','28pt']} pl={[0,0,0,10]} textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Quam lacus suspendisse faucibus interdum. Egestas sed sed risus pretium quam vulputate. Eu facilisis sed odio morbi quis. 
                 Quam vulputate dignissim suspendisse in est ante in. Dictumst quisque sagittis purus sit amet volutpat consequat. 
                 Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Pretium quam vulputate dignissim suspendisse in est ante in. 
                 Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet.
                  Dui nunc mattis enim ut tellus elementum sagittis. Malesuada proin libero nunc consequat interdum varius sit. Fermentum et sollicitudin ac orci phasellus. 
                  Gravida neque convallis a cras semper.</Text>
        </Stack>
        <Box p={[5,5,20,20]}  width={['100%']} height={['200px','200px','600px','1080px']}>
            <iframe width='100%' height='100%' src="https://www.youtube.com/embed/3xJRqNCJjZw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Box>
    </VStack>
  )
}

export default About