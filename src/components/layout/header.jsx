import './header.scss';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/book">Books</NavLink></li>
        </ul>

    )
}
export default Header;