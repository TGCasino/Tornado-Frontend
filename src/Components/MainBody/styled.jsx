import { Box, Button, Typography, styled } from '@mui/material'

export const Wrapper1 = styled(Box)(({ theme }) => ({
  margin: 'auto',
  textAlign: 'center',
  border: '1px solid rgb(54, 210, 205)',
  padding: '20px 0px',
  borderRadius: '10px',
}));

export const Wrapper2 = styled(Box)(({ theme }) => ({
  width: '90%',
  margin: 'auto',
  textAlign: 'center',
  border: '1px solid rgb(54, 210, 205)',
  padding: '20px 0px',
  borderRadius: '10px',
}));

export const Walletbutton = styled(Button)(({ theme }) => ({
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  backgroundColor: 'rgba(54, 210, 205)',
  color: 'white',
  fontWeight: 'bold',
  padding: '20px 0px',
  borderRadius: '10px',
  '&:hover':{
    boxShadow: '0 4px 30px rgba(54,210,205,.6)',
    backgroundColor: 'rgba(54, 210, 205)',
  }
}));

