import { Box, styled, Button, InputBase, Typography, alpha } from '@mui/material'

export const WithdrawWrapper = styled(Box)(({ theme }) => ({
  padding : '40px 0',
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

export const InputWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #999',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  width: '100%',
  margin: '20px auto',
  [theme.breakpoints.up('sm')]: {
    width: '80%',
    margin: '20px auto',
  },
  '& .MuiInputBase-root': {
    width: '100%',
  }
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    textAlign: 'center',
    margin : 'auto',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      '&:focus': {
        width: '90%',
      },
    },
  },
}));