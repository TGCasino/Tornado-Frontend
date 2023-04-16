import React, {useState} from 'react';
import {
  Box,
  Button,
  Tab
} from '@mui/material';
import { 
  Wrapper1,
  Wrapper2,
  Walletbutton
} from './styled';
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab';

export default function MainBody() {
  const [connected, setConnected] = useState(true)
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
          <Walletbutton>Wallet Connect</Walletbutton>
        </Wrapper1> 
      ) 
      :
      (
        <Wrapper2>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabId}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Box>      
        </Wrapper2>
      )
    }
    </>
  );
}