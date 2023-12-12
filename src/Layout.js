import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Kezdőoldal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/urlap">Űrlap</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/adatok">Adatok</Link>
                    </li>
                </ul>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
