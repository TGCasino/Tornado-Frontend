import React, {useState} from 'react';
import { 
  Box,
} from '@mui/material';
import {
  MainBodyWrapper,
  BodyWrapper
} from './styled';
import Description from '../Components/Description';
import MainBody from '../Components/MainBody';
import TopBar from '../Components/TopBar/TopBar';
import BottomBar from '../Components/BottomBar';
import BG from '../Assets/bg.png';

function Home() {
  return (
    <Box sx={{
      backgroundImage : `url(${BG})`, 
      width:'1', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed'}}
    >
      <TopBar />
      <BodyWrapper>
        <MainBodyWrapper>
          {/* <Description /> */}
          <MainBody />
        </MainBodyWrapper>
      </BodyWrapper>
      <BottomBar/>
    </Box>
  );
}

export default Home;