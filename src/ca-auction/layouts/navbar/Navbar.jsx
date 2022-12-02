import NavbarLogo from "./NavbarLogo"
import NavbarInfoMenu from "./NavbarInfoMenu"

const Navbar = () => {
    
    return (
        <div className="flex flex-row">
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