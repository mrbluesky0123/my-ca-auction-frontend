import Menu from "./Menu";
import Logo from "./Logo";
import { Divider } from '@chakra-ui/react'

const Sidebar = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-5/6">
                <Menu />
            </div>
            <Divider />
            <div className="h-12">
                <Logo />
            </div>
        </div>
    )
}

export default Sidebar;