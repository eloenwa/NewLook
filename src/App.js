
import logo from './logo.svg';
import './App.css';

import ReactGA from "react-ga";  //Google Analytics
import React, { useEffect, useRef } from 'react'; //useEffect for Google Analytics
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import components
import NaviBar from './components/NaviBar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import OurFooter from './components/OurFooter';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'




const App =()=> {

  //for google analytics
  useEffect(() => {
    ReactGA.initialize('UA-186381428-2');
    ReactGA.pageview(window.location.pathname);
  })




  return (
    <ChakraProvider>
      

      
      <div style={{backgroundColor:'#002060',color:"white",overflow:'hidden'}} >
      
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} width={'100vw'}>
        <section >
          <NaviBar />
          <Hero />
        </section>
        <section id='about'>
          <About />          
        </section>
        <section id='team'>
          <Team />
        </section>
        <section id='contact'>
          <ContactUs />
          <OurFooter />
        </section>
      

      </Box>
      </div>

    

    </ChakraProvider>
    
  );
}

export default App;
