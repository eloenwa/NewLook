import React from 'react';
import { Box, HStack, VStack,Text } from '@chakra-ui/react'

const NaviBar = () => {
  return (
    <Box width={'90vw'} pl={[2,2,10,20]} pr={[2,2,10,20]} pt={[5,5,10,20]}  >
        <HStack justifyContent={['flex-start','flex-start','space-between','space-between']} >
            <Text color={'white'} 
            fontSize={['2xl','2xl','2xl','6xl']}
            fontFamily={'arial'}
            fontWeight={'extrabold'}
            >LOQUI-<span style={{color:'#ED7D31'}}>AI</span></Text>
            <HStack fontFamily={'arial'} fontSize={['2xl','2xl','2xl','4xl']}  display={['none','none','flex','flex']}>
                <Text pl={[2,2,5,10]} pr={[2,2,5,10]}><a href='#about'>About</a></Text>
                <Text pl={[2,2,5,10]} pr={[2,2,5,10]}><a href='#team'>Team</a></Text>
                <Text pl={[2,2,5,10]} pr={[2,2,5,10]}><a href='#contact'>Contact Us</a></Text>
            </HStack>
        </HStack>
    </Box>
  )
}

export default NaviBar;


//backgroundColor={'yellow'}