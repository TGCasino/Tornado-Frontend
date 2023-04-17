import { Box, styled } from '@mui/material'

export const MainBodyWrapper = styled(Box)(({ theme }) => ({
  margin : 'auto',
  display: 'block',
  padding : '30px 0px',
  width: '90%',
  [theme.breakpoints.up('md')]: {
    width: '60%',
    margin : 'auto',
  },
}));

export const BodyWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
}));