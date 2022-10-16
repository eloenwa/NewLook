import React, {useRef,useEffect} from 'react';
import { Box, Stack, HStack, VStack, Button, Image,Text} from '@chakra-ui/react';
import HeroImg from './Images/Picture20.png';

import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    let logoItem = useRef(null)
    let scrollText = useRef(null)
    let heroText = useRef(null)
    

    


    useEffect(() => {
        let mm = gsap.matchMedia();


        mm.add({
            isMobile: "(max-width: 500px)",
            isDesktop: "(min-width: 501px)"
        }, (context) => {

            let {isMobile, isDesktop} = context.conditions;

            gsap.to(logoItem,0.5,
                {
                    opacity:1,
                    y: isMobile ? -10 : -20,
                    ease: Power3.easeIn,
                    delay:0.1
    
                })
            gsap.to(heroText,1,
                {
                    opacity:1,
                    y: isMobile ? -10 : -20,
                    ease: Power3.easeIn,
                    delay:0.5
    
                })
            gsap.to(scrollText,1,
                {
                    opacity:0.3,
                    y: isMobile ? -10 : -20,
                    ease: Power3.easeIn,
                    delay:5
    
                })


            gsap.to(scrollText,5,
                { 
                    opacity:0,
                    y: isMobile ? -10 : -20,
                    ease: Power3.circ,
                    delay:0.1,
                    
                    
                    scrollTrigger:{
                        duration: 5,
                        trigger: scrollText,
                        start: 'bottom 50%',
                        toggleActions: "play reverse none none", 
                    


                    }   
                })
        })
        




    })
  return (
    <Box width={'90vw'} pb={[10,10,10,100]}>
        <VStack>
            <Stack display={'flex'} justifyContent={'space-between'}  pl={[0,0,0,20]} pr={[0,0,0,20]} pt={[20,20,20,40]} direction={['column-reverse','column-reverse','column-reverse','row']} alignItems={'center'}>
                <VStack display={'flex'} alignItems={['center','flex-start']} justifyContent={['center','center','flex-start','flex-start']} 
                ref={el => {heroText =el}} opacity={0} mt={[10,10,10,20]}>
                    <Text fontFamily={'arial'} fontSize={['22pt','22pt','45pt','63pt']} textAlign={['center','center','start','start']}>Practice Makes<br></br>Perfect</Text>
                    <Text fontFamily={'arial'} fontSize={['12pt','12pt','15.5pt','28pt']} textAlign={['center','center','start','start']}>Have open-ended conversations/small<br></br>talk with an AI language companion<br></br>today in your target language</Text>
                    <Box pt={10} display={'flex'} alignContent={'flex-start'}>
                        <Button width={['150px','200px']} height={['50px','75px']} backgroundColor='#ED7D31' color='white'
                        fontFamily={'arial'} fontSize={['18','22pt']}
                        ><a href='https://www.loqui-ai-api.com/'>Try Demo</a></Button>
                    </Box>
                </VStack>
                <Box width={['90vw','90vw','70vw','55vw']}  display={'flex'} justifyContent={'flex-end'} >
                    <Image ref={el => {logoItem =el}} src={HeroImg}  alt='Hero Image' opacity={0}/>
                </Box>
            </Stack>

            <Box pt={[5,5,5,"100px"]} ref={el => {scrollText =el}} opacity={0}>
                <Text  fontSize={['12pt','12pt','12pt','30pt']} >Scroll down for more info</Text>
            </Box>
        </VStack>

    </Box>
  )
}

export default Hero;