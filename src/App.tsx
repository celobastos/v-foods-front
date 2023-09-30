import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { PerfilGestor } from "./pages/Perfil";
import Colaborador from "./pages/Colaborador";
import HomePage from './pages/homepage/homepage';
import Indicadores from './pages/indicadores/indicadores';
import Relatorio from "./pages/relatorio/relatorio";
import Colaboradores from "./pages/colaboradores/colaboradores";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/Gestor",
    Component: PerfilGestor,
  },
  {
    path: "/Colaborador",
    Component: Colaborador,
  },
  {
    path: "/HomePage",
    Component: HomePage,
  },
  {
    path: "/Indicadores",
    Component: Indicadores,
  },
  {
    path: "/Relatorio",
    Component: Relatorio,
  },
  {
    path: "/Colaboradores",
    Component: Colaboradores,
  },
  
]);
export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
