import { Link, Outlet } from "react-router-dom"

const Navigationbar = () => {
    return (
        <>

            <nav className="navigation">
                <ul className="unordered-list">
                    <li className="list-item-documentatie"><Link to="/documentatie">Documentatie</Link></li>
                    <li className="list-item-downloaden"><Link to="/downloaden">Downloaden</Link></li>
                </ul>
            </nav >

            <Outlet />

        </>
    );
}

export default Navigationbar;