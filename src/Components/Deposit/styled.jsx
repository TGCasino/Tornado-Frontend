import {Box, Button, styled} from '@mui/material';

export const DepositWrapper = styled(Box)(({ theme }) => ({
  padding : '40px 0',
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
  width: '95%',
  margin: '5px auto',
  textAlign: 'center',
  border: '2px solid rgba(54, 210, 205)',
  color: 'rgba(54, 210, 205)',
  fontWeight: 'bold',
  padding: '10px 0px',
  borderRadius: '10px',
  fontSize: '20px',
  '&:hover':{
    boxShadow: '0 4px 30px rgba(54,210,205,.6)',
  }
}));

export const FilledButtonStyle = styled(Button)(({ theme }) => ({
  width: '70%',
  margin: '20px auto',
  textAlign: 'center',
  backgroundColor: 'rgba(54, 210, 205)',
  color: 'white',
  fontWeight: 'bold',
  padding: '15px 0px',
  borderRadius: '10px',
  fontSize: '15px',
  '&:hover':{
    backgroundColor: 'rgba(54, 210, 205)',
    boxShadow: '0 4px 30px rgba(54,210,205,.6)',
  }
}));