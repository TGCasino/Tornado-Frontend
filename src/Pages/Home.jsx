import React, {useState} from 'react';
import { 
  Box,
} from '@mui/material';
import {MainBodyWrapper} from './styled';
import Description from '../Components/Description';
import MainBody from '../Components/MainBody';
import TopBar from '../Components/TopBar/TopBar';
import BG from '../Assets/bg.png';

function Home() {
  return (
    <Box sx={{backgroundImage : `url(${BG})`, width:'1', height:'100vh'}}>
      <TopBar />
      <MainBodyWrapper>
        {/* <Description /> */}
        <MainBody />
      </MainBodyWrapper>
    </Box>
  );
}

export default Home;