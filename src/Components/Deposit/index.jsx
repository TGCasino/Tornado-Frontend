import React, {useState} from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import {
  DepositWrapper,
  ButtonStyle,
  FilledButtonStyle
} from './styled';

const depositButtons = ['10', '100', '1000', '10000'];

export default function Deposit() {
  const [balance, setBalance] = useState(0.0);
  const [approve, setApprove] = useState(10000);
  
  return (
    <DepositWrapper>
      <Typography variant='h4' sx={{fontWeight : 'bold'}}>Token</Typography>
      <Box sx={{width : '60%', margin : '40px auto', border:'1px solid #999', borderRadius:'10px', padding:'10px 0px'}}>
        <Typography variant='h5'>Grimace</Typography>
      </Box>
      <Typography variant='h5' sx={{fontWeight : 'bold'}}>Balance : {balance} GRM</Typography>
      <Box sx={{width : '100%', margin : '30px 0px'}}>
        <Typography variant='h6'>Choose Amount:</Typography>
        <Container fixed sx={{margin : "50px 0"}}>
          <Grid container spacing={3}>
            {
              depositButtons.map((item, index) => {
                return(
                  <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                    <ButtonStyle>{item} GRM</ButtonStyle>
                  </Grid>
                )
              })
            }
          </Grid>
        </Container>  
      </Box>
      <Box sx={{width : '100%', margin : '10px 0px'}}>
        <Typography variant='h6'>Approve then deposit.</Typography>
        <FilledButtonStyle>Approve {approve} GRM</FilledButtonStyle>
      </Box>
    </DepositWrapper>
  );
}
