import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/aaa">프로젝트 구인</Link>
            </li>
            <li>
                <Link to="/bbb">프로젝트 구직</Link>
            </li>
        </div>
    )
    
}

export default Menu;