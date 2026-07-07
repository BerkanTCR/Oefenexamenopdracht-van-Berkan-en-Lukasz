import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Navigationbar from "./components/Navigationbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Documentatie from "./pages/Documentatie.jsx";
import Downloaden from "./pages/Downloaden.jsx";  
import NoPage from "./pages/NoPage.jsx";
import CardDetail from "./components/CardDetail.jsx";
import './App.css'

const App = () => {
    return (
        <>

            <BrowserRouter basename="/Examenopdracht-van-Berkan-en-Lukasz">

                <Routes>
                    <Route path="/" element={<Navigationbar/>}>
                        <Route index element={<Homepage />} />
                        <Route path="/documentatie" element={<Documentatie />} />
                        <Route path="/downloaden" element={<Downloaden />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="/cardDetail/:cardId" element={<CardDetail/>} />
                        

                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;