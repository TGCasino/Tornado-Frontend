import React, {useState} from 'react';
import { Typography } from '@mui/material';
import {
  WithdrawWrapper,
  FilledButtonStyle,
  StyledInputBase,
  InputWrapper,
  SmallWrapper,
  BoldTypography
} from './styled';

const depositButtons = ['10', '100', '1000', '10000'];

export default function Withdraw() { 
  const [status, setStatus] = useState("Input a valid secret key.");

  return (
    <WithdrawWrapper>
      <SmallWrapper>
        <BoldTypography variant='h4'>Secret Key</BoldTypography>
        <InputWrapper>
          <StyledInputBase
            placeholder="Paste your secret key here."
            inputProps={{ 'aria-label': 'search' }}
            // value="0x.....123456798"
          />
        </InputWrapper>        
      </SmallWrapper>
      <SmallWrapper>
        <BoldTypography variant='h5'>Status</BoldTypography>
        <Typography variant='h6' color='#ffff20'>{status}</Typography>
      </SmallWrapper>
      <SmallWrapper>
        <BoldTypography variant='h4'>Recipient Address</BoldTypography>
        <InputWrapper>
          <StyledInputBase
            placeholder="Which address receives the funds?"
            inputProps={{ 'aria-label': 'search' }}
            // value="0x.....123456798"
          />
        </InputWrapper>        
      </SmallWrapper>
      <FilledButtonStyle>Withdraw</FilledButtonStyle>
    </WithdrawWrapper>
  );
}
