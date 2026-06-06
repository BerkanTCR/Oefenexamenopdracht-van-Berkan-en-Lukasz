import { Link, Outlet } from "react-router-dom"

const Navigationbar = () => {
    return (
        <>

            <nav className="navigation">

                <div className="logo-title-container">
                    <img className="berkan-logo" src="./src/assets/berkan-logo.png" alt="" />
                    <h2>Examenopdracht <span className="highlighted-react">React</span> van Berkan & Lukasz</h2>
                </div>

                <ul className="unordered-list">
                    <li><Link to="/documentatie">Documentatie</Link></li>
                    <li><Link to="/downloaden">Downloaden</Link></li>
                </ul>

                <div className="searchbar-container">
                    <img className="search-icon" src="./src/assets/search-icon.png" alt="Zoeken"/>
                    <input type="text" placeholder="Zoeken..."/>
                </div>

            </nav >

            <Outlet />

        </>
    );
}

export default Navigationbar;