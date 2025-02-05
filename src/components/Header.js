import Logo from "../assets/logo.png"
import { Link, Outlet } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="" />
            <>
                <nav>
                    <ul className="horizontal-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </>
        </header>
    )
}

export default Header