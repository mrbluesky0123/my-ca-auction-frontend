import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import LogoutIcon from '@mui/icons-material/Logout';
import {Box, Button, Stack} from "@mui/material";
import {useState} from "react";
import AlertDialog from "../../components/AlertDialog";
import {useNavigate} from "react-router-dom";

const appbarHeight = 50;
const Navbar = ({handleDrawerToggle, window}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [isLogoutAlertVisible, setLogoutAlertVisible] = useState(false);
    const onLogoutClick = () => {
      localStorage.clear();
      setLogoutAlertVisible(true);
    }

    const redirectToLogin = () => {
      navigate('/');
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
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
            <Typography variant="h6" color="inherit" component="div" sx={{fontWeight: 'bold', flexGrow: 1}}>
              CAuction
            </Typography>
            {
              localStorage.getItem("userId") &&
              <Stack direction={"row"} sx={{ flexGrow: 0 }}>
                <Typography
                  align="center"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    flexGrow: 0,
                    color: "inherit",
                    mt: '0.2rem',
                    mr: '2rem'
                  }}>
                  {localStorage.getItem("userId")}님, 환영합니다!
                </Typography>
                <Button sx={{ flexGrow: 0, padding: 0}} color="inherit" startIcon={<LogoutIcon/>} onClick={onLogoutClick}> Logout </Button>
                {/*<Typography variant="h6" color="inherit" component="div" sx={{fontWeight: 'bold'}}>*/}
                {/*  */}
                {/*</Typography>*/}
              </Stack>
            }
          </Toolbar>
        </AppBar>
        <AlertDialog isVisible={isLogoutAlertVisible}
                     title={"로그아웃됨"}
                     contents={"안전하게 로그아웃 되었습니다."}
                     isErrorDialog={false}
                     callbackFunction={() => redirectToLogin()} />
      </Box>
    )
}

export default Navbar;
