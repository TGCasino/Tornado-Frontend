import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { 
  LogoBox,
  StyledInputBase,
  InputWrapper
} from './styled';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor : "#041935", 
          borderBottom : '1px solid #333'
          }}>
        <Toolbar>
          <LogoBox>
            <CurrencyBitcoinIcon sx={{fontSize:'30px'}}/>
          </LogoBox>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign:'left' }}
          >
            Grimace Coin Mixer
          </Typography>
          <InputWrapper>
            <StyledInputBase
              placeholder="Not connected"
              readOnly
              inputProps={{ 'aria-label': 'search' }}
              // value="0x.....123456798"
            />
          </InputWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}