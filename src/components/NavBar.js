import { Link, NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div>
                <Link className="navbar-brand" to="/">Github Search</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">Информация</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;