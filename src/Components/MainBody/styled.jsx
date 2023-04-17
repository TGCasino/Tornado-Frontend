import { Box, Button, Tab, styled } from '@mui/material'
import { TabPanel } from '@mui/lab';

export const Wrapper1 = styled(Box)(({ theme }) => ({
  margin: 'auto',
  textAlign: 'center',
  border: '1px solid #999',
  padding: '40px 0px',
  borderRadius: '10px',
}));

export const Wrapper2 = styled(Box)(({ theme }) => ({
  width: '90%',
  margin: 'auto',
  textAlign: 'center',
  padding: '20px 0px',
}));

export const Wrapper2Box = styled(Box)(({ theme }) => ({
  width: '100%', 
  typography: 'body1', 
  textAlign:'center'
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
  width: '60%',
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

export const MainTab = styled(Tab)(({ theme }) => ({
  color : 'white',
  width: '45%',
  margin: 'auto',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '15px',
  border: '1px solid #999',
  padding: '20px 0px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));

export const MainTabPanel = styled(TabPanel)(({ theme }) => ({
  color: 'white',
  border: '1px solid #999',
  borderRadius : '10px',
}));