import HomePage from './pages/homepage/homepage';
import Indicadores from './pages/indicadores/indicadores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Routing = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/indicadores" element={<Indicadores/>} />
            
        </Routes>
        </BrowserRouter>
    );
};

export default Routing;