import { Link, Outlet } from "react-router-dom"

const Navigationbar = () => {
    return (
        <>

            <nav className="navigation">

                <div className="logo-title-container">
                    <Link to="/"><img className="berkan-logo" src="/src/assets/berkan-logo.png" alt="" /></Link>
                    <h2>Examenopdracht <span className="highlighted-react">React</span> van Berkan & Lukasz</h2>
                </div>

                <ul className="unordered-list">
                    <li><Link to="/documentatie">Documentatie</Link></li>
                    <li><Link to="/downloaden">Downloaden</Link></li>
                </ul>

                <div className="searchbar-container">
                    <button type="submit"><img src="/src/assets/search-icon.png" alt="" /></button>
                    <input type="text" placeholder="Zoeken..." />
                </div>

            </nav >

            <Outlet />

        </>
    );
}

export default Navigationbar;