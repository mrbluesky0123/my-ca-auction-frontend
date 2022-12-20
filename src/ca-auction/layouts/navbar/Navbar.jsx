import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useTheme} from "@mui/material/styles";

const appbarHeight = 50;
const Navbar = ({handleDrawerToggle, window}) => {
    const theme = useTheme();
    return (
        <AppBar
          position="fixed"
          elevation={0}
          className='border-none bg-black'
          sx={{
            backgroundColor: theme.palette.primary[900],
            color: theme.palette.primary,
            height: appbarHeight
          }}
          >
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu"
                        sx={{mr: 2}} onClick={handleDrawerToggle}>
              <Menu/>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" sx={{fontWeight: 'bold'}}>
              CAuction
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar;
