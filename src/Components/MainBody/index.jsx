import React, {useState} from 'react';
import {
  Box,
  Button,
  Tab,
  Tabs
} from '@mui/material';
import { 
  Wrapper1,
  Wrapper2,
  ButtonStyle,
  MainTab,
  MainTabPanel
} from './styled';
import {
  TabContext,
  TabPanel
} from '@mui/lab';
import Deposit from '../Deposit';
import Withdraw from '../Withdraw';

export default function MainBody() {
  const [connected, setConnected] = useState(false)
  const [tabId, setTabId] = useState('1');

  const handleChange = (event, newValue) => {
    setTabId(newValue);
  };

  return (
    <>
    {
      connected ? 
      (
        <Wrapper1 
          sx={{ width: {lg: '60%', md : '70%', sm: '80%', xs : '90%'}}}
        >
          <ButtonStyle>Wallet Connect</ButtonStyle>
        </Wrapper1> 
      ) 
      :
      (
        <Wrapper2>
          <Box sx={{ width: '100%', typography: 'body1', textAlign:'center' }}>
            <TabContext value={tabId}>
              <Box>
                <Tabs 
                  onChange={handleChange} 
                  aria-label="Tabs"
                  indicatorColor="secondary"
                >
                  <MainTab label="Deposit" value="1"/>
                  <MainTab label="Withdraw" value="2"/>
                </Tabs>
              </Box>
              <MainTabPanel value="1">
                <Deposit />
              </MainTabPanel>
              <MainTabPanel value="2">
                <Withdraw />
              </MainTabPanel>
            </TabContext>
          </Box>      
        </Wrapper2>
      )
    }
    </>
  );
}