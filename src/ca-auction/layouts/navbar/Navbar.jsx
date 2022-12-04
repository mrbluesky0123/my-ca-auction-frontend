import NavbarLogo from "./NavbarLogo"
import NavbarInfoMenu from "./NavbarInfoMenu"

const Navbar = () => {
    
    return (
        <div className="px-2.5 w-screen flex justify-between">
            <div>
                <NavbarLogo />
            </div>
            <div>
                <NavbarInfoMenu />
            </div>
        </div>
    )
}

export default Navbar;