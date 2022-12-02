import { Link } from "react-router-dom";
import { Box } from '@chakra-ui/react'
const NavbarInfoMenu = () => {

    return (
        <Box flex='1'>
            <div className='flex justify-end'>
                <Link to="/"> My Projects </Link>
                <p className="px-2"> | </p>
                <Link to="/"> My Account </Link>
            </div>
            
        </Box>
    )
    
}

export default NavbarInfoMenu;