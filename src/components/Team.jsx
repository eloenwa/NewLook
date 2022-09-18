import React from 'react';
import { Box, HStack, VStack, Button, Image, Text} from '@chakra-ui/react';
import Image3 from './Images/image3.png';
import Image2 from './Images/image2.png';
import Image1 from './Images/image1.png';


const Team = () => {
  return (
    <Box width={'90vw'} pl={[0,0,10,20]} pr={[0,0,10,20]} pt={[5,5,20,20]}  overflowY={'auto'}>
        <Text color={'white'} 
            fontSize={['2xl','2xl','6xl','8xl']}
            fontFamily={'arial'}
            fontWeight={'bold'} p={[5,5,10,20]}>Team</Text>
        <HStack display={'flex'} overflowY={'auto'}>
            <VStack pl={[5,5,0,0]} pr={[5,5,0,0]}>
                <Box width={['200px','200px','600px']} display={'flex'} justifyContent={'center'}><Image src={Image3}  alt='made with Dalle-2, "the creation" robot human' /></Box>
                <Text fontSize={['16pt','16pt','24pt','28pt']}
                        fontFamily={'arial'}  p={[0,0,3,5]} >Co-Founder</Text>
                <Text fontSize={['10pt','10pt','15.5pt','20pt']}
                        fontFamily={'arial'} p={[0,0,8,10]} >Elo is a Mechanical/Petroleum Engineer. Elo loves building software and hardware systems to overcome the daily challenges he encounters. Elo is a Mechanical/Petroleum Engineer. Elo loves building software and hardware systems to overcome the daily challenges he encounters. </Text>
            </VStack>
            <VStack>
                <Box width={['200px','200px','600px']} display={'flex'} justifyContent={'center'}><Image src={Image2}  alt='made with Dalle-2, "the creation" robot human' /></Box>
                <Text fontSize={['16pt','16pt','24pt','28pt']}
                        fontFamily={'arial'} p={[0,0,3,5]} >Co-Founder</Text>
                <Text fontSize={['10pt','10pt','15.5pt','20pt']}
                        fontFamily={'arial'} p={[0,0,8,10]}>Elo is a Mechanical/Petroleum Engineer. Elo loves building software and hardware systems to overcome the daily challenges he encounters. Elo is a Mechanical/Petroleum Engineer. Elo loves building software and hardware systems to overcome the daily challenges he encounters. </Text>
            </VStack>
            <VStack>
                <Box width={['200px','200px','600px']} display={'flex'} justifyContent={'center'}><Image src={Image1}  alt='made with Dalle-2, "the creation" robot human' /></Box>
                <Text fontSize={['16pt','16pt','24pt','28pt']}
                        fontFamily={'arial'}  p={[0,0,3,5]} >Masot</Text>
                <Text fontSize={['10pt','10pt','15.5pt','20pt']}
                        fontFamily={'arial'} p={[0,0,8,10]}>Elo is a Mechanical/Petroleum Engineer. Elo loves building software and hardware systems to overcome the daily challenges he encounters. Elo is a Mechanical/Petroleum Engineer. Elo loves building software and hardware systems to overcome the daily challenges he encounters.</Text>
            </VStack>
        </HStack>
    </Box>
  )
}

export default Team