import React, {useState} from 'react';
import { Box, Stack, HStack, VStack, Button, Image, Text, Input} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea 
  } from '@chakra-ui/react';

const ContactUs = () => {
  
    
    const [emailinput, setEMailInput] = useState('')
    
    const handleEmailInputChange = (e) => setEMailInput(e.target.value)

    const [nameinput, setNameInput] = useState('')
    
    const handleNameInputChange = (e) => setNameInput(e.target.value)
    
    const isError = emailinput === ''
    return (
    <Box width={'90vw'} pl={[0,0,10,20]} pr={[0,0,10,20]} pt={[5,5,20,20]}>
            <Text color={'white'} 
            fontSize={['2xl','2xl','6xl','8xl']}
            fontFamily={'arial'}
            fontWeight={'bold'} p={[5,5,10,20]}>Contact Us</Text>
        
        <FormControl >
            <Stack width={'100%'} direction={['column','column','column','row']}  display={'flex'} alignItems={'center'}   >
                <VStack >
                    <Input
                        type='text'
                        value={emailinput}
                        placeholder='Name'
                        onChange={handleEmailInputChange}

                        width={['350px','350px','500px','700px']}
                        backgroundColor={'white'}
                        color={'black'}
                        mt={[2,2,2,10]}
                        mb={[2,2,2,10]}
                    />

                </VStack>
                
                <VStack>
                    <Input display={'flex'} 
                        type='email'
                        placeholder='Email'
                        value={nameinput}
                        onChange={handleNameInputChange}

                        width={['350px','350px','500px','700px']}
                        backgroundColor={'white'}
                        color={'black'}
                        mt={[2,2,10]}
                        mb={[5,5,10]}
                    />
                </VStack>
                
            </Stack>
           
            <Textarea placeholder='What would you like to tell us?' 
                backgroundColor={'white'}
                color={'black'}
                height={'400px'}
            />

            <Box pt={10} display={'flex'} alignContent={'flex-start'}>
                <Button width={['120px','150px']} height={'50px'} backgroundColor='#1f8934' color='white'
                    fontFamily={'arial'} fontSize={['18pt','22pt']}
                >send</Button>
            </Box>

        </FormControl>
    </Box>
  )
}

export default ContactUs