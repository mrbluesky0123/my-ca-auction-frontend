import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

const NavbarInfoMenu = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                elevation={0}
                className='border-none bg-black'
                sx={{
                    backgroundColor: `white`,
                    color:`black`
                }}
                position="static">
                <Toolbar variant="dense">
                {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" color="inherit" component="div">
                    CAuction
                </Typography>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    )
    
}
  

export default NavbarInfoMenu;