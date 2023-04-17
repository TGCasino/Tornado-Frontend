import React, {useState} from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import {
  WithdrawWrapper,
  FilledButtonStyle,
  StyledInputBase,
  InputWrapper
} from './styled';

const depositButtons = ['10', '100', '1000', '10000'];

export default function Withdraw() { 
  return (
    <WithdrawWrapper>
      <Box sx={{width : '100%'}}>
        <Typography variant='h4' sx={{fontWeight : 'bold'}}>Secret Key</Typography>
        <InputWrapper>
          <StyledInputBase
            placeholder="Paste your secret key here."
            inputProps={{ 'aria-label': 'search' }}
            // value="0x.....123456798"
          />
        </InputWrapper>        
      </Box>
      <Typography variant='h5' sx={{fontWeight : 'bold'}}>Status</Typography>
      <Typography variant='h4' sx={{fontWeight : 'bold'}}>recipient Address</Typography>
      <FilledButtonStyle>Withdraw</FilledButtonStyle>
    </WithdrawWrapper>
  );
}
