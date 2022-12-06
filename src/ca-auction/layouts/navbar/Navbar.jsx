import NavbarLogo from "./NavbarLogo"
import NavbarInfoMenu from "./NavbarInfoMenu"

const Navbar = ({handleDrawerToggle, window}) => {

    return (
        <div className="w-screen flex justify-between">
                <NavbarInfoMenu handleDrawerToggle={handleDrawerToggle}/>
        </div>
    )
}

export default Navbar;
