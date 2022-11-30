import Menu from "./Menu";
import CI from "./CI";

const Sidebar = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-5/6">
                <Menu/>
            </div>
            <div className="h-12">
                <CI/>
            </div>
        </div>
    )
}

export default Sidebar;