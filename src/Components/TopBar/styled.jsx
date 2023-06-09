import { AppBar, Box, styled, InputBase, Typography, alpha } from '@mui/material'

export const MyAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor : "#041935", 
  borderBottom : '1px solid #333'
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  width: { xs:'50px', md:'50px' },
}));

export const InputWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgb(54, 210, 205)',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#ffff50',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    textAlign: 'center',
    transition: theme.transitions.create('width'),
    width: '100%',
    '&::placeholder' : {
      color: 'rgb(54, 210, 205)',
    },
    [theme.breakpoints.up('sm')]: {
      width: '150px',
      '&:focus': {
        width: '150px',
      },
    },
  },
}));