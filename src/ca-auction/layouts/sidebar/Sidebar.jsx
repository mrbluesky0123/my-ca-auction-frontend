import Menu from "./Menu";
import Logo from "./Logo";
import { Divider } from '@chakra-ui/react'

const Sidebar = ({drawerOpen, drawerToggle, window}) => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-5/6">
                <Menu drawerToggle={drawerToggle} drawerOpen={drawerOpen}/>
            </div>
            <Divider />
            <div className="h-12">
                <Logo />
            </div>
        </div>
    )
}

export default Sidebar;
