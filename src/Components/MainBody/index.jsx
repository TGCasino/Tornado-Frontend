import React, {useState} from 'react';
import {
  Box,
  Tabs
} from '@mui/material';
import { 
  Wrapper1,
  Wrapper2,
  Wrapper2Box,
  ButtonStyle,
  MainTab,
  MainTabPanel
} from './styled';
import {
  TabContext,
} from '@mui/lab';
import Deposit from '../Deposit';
import Withdraw from '../Withdraw';

export default function MainBody() {
  const [connected, setConnected] = useState(false)
  const [tabId, setTabId] = useState('1');

  const handleChange = (event, newValue) => {
    setTabId(newValue);
  };

  const handleConnect = (event) => {
    setConnected(true);
  };

  return (
    <>
    {
      !connected ? 
      (
        <Wrapper1>
          <ButtonStyle onClick={handleConnect}>Wallet Connect</ButtonStyle>
        </Wrapper1> 
      ) 
      :
      (
        <Wrapper2>
          <Wrapper2Box>
            <TabContext value={tabId}>
              <Box>
                <Tabs 
                  value={tabId}
                  onChange={handleChange} 
                  aria-label="Tabs"
                  indicatorColor='inherit'
                  textColor='inherit'
                >
                  <MainTab label="Deposit" value="1" sx={{backgroundColor : (tabId == '1') ? 'rgba(54, 210, 205)' : 'transparent'}}/>
                  <MainTab label="Withdraw" value="2" sx={{backgroundColor : (tabId == '2') ? 'rgba(54, 210, 205)' : 'transparent'}}/>
                </Tabs>
              </Box>
              <MainTabPanel value="1">
                <Deposit />
              </MainTabPanel>
              <MainTabPanel value="2">
                <Withdraw />
              </MainTabPanel>
            </TabContext>
          </Wrapper2Box>      
        </Wrapper2>
      )
    }
    </>
  );
}