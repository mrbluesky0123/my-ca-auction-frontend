import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountBoxSharp from '@mui/icons-material/AccountBoxSharp';


const NavbarInfoMenu = ({handleDrawerToggle, window}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        elevation={0}
        className='border-none bg-black'
        sx={{
          backgroundColor: `white`,
          color: `black`
        }}
        position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu"
                      sx={{mr: 2}} onClick={handleDrawerToggle}>
            <AccountBoxSharp/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CAuction
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider/>
    </Box>
  )

}


export default NavbarInfoMenu;
