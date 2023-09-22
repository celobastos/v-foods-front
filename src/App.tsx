import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { PerfilGestor } from "./pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/Gestor",
    Component: PerfilGestor,
  },
]);
export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
