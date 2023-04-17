import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { 
  LogoBox,
  StyledInputBase,
  InputWrapper,
  MyAppBar
} from './styled';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <MyAppBar 
        position="static"
      >
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
      </MyAppBar>
    </Box>
  );
}