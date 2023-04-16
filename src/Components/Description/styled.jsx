import { Box, Typography, styled } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '90%',
  margin: 'auto',
  textAlign: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  width: '100%',
  fontWeight: 'bold',
  fontSize : '40px',
  textAlign:'center',
  color: 'white',
}))