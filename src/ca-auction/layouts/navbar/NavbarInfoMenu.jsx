import { Link } from "react-router-dom";
import { Box } from '@mui/material';
const NavbarInfoMenu = () => {

    return (
        <Box>
            <div className='flex justify-end'>
                <Link to="/"> My Projects </Link>
                <p className="px-2"> | </p>
                <Link to="/"> My Account </Link>
            </div>
            
        </Box>
    )
    
}

export default NavbarInfoMenu;