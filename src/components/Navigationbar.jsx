import { Link, Outlet } from "react-router-dom"
import SearchBar from "./SearchBar";

const Navigationbar = () => {
    return (
        <>

            <nav className="navigation">

                <div className="logo-title-container">
                    <Link to="/"><img className="berkan-logo" src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/berkan-logo.png" alt="" /></Link>
                    <h2>Examenopdracht <span className="highlighted-react">React</span> van Berkan & Lukasz</h2>
                </div>

                <ul className="unordered-list">
                    <li><Link to="/documentatie">Documentatie</Link></li>
                    <li><Link to="/downloaden">Downloaden</Link></li>
                </ul>

                <SearchBar />

            </nav >

            <Outlet />

        </>
    );
}

export default Navigationbar;