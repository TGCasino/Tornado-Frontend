import { Box, styled } from '@mui/material'

export const MainBodyWrapper = styled(Box)(({ theme }) => ({
  width: '90%',
  margin : 'auto',
  display: 'block',
  padding : '30px 0px',
}));

export const BodyWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
}));