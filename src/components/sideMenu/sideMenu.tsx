import HomeIcon from '../../assets/Group 15.png';
import ConfigIcon from '../../assets/ConfigIcon.png';
import IndicadoresIcon from '../../assets/IndicadoresIcon.png';
import RankingIcon from '../../assets/rankingIcon.png';
import PerfilIcon from '../../assets/PerfilIcon.png';
import LogoutIcon from '../../assets/LogoutIIconpng.png';
import Logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

const SideMenu = () => {
    return (
        <aside className="flex-shrink-0 h-full bg-white w-64 px-8 py-4 shadow-md flex flex-col justify-between border-r-2 border-div-color"style={{ backgroundColor: '#FBFBFB' }}>
             <div>
                <div className="mt-10 mb-20 flex justify-center">
                    <img src={Logo} alt="Logo" className="w-133px h-27px" />
                </div>
                <ul>
                    <li className="mb-4 hover:bg-hover-blue transition p-2 rounded-md">
                        <Link to={`/HomePage`}>
                            <a href="#" className="text-gray-700 flex items-center space-x-6">
                                <img src={HomeIcon} alt="Home Icon" className="w-6 h-6" />
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 hover:bg-hover-blue transition p-2 rounded-md">
                        <Link to={`/Indicadores`}>
                                <a href="#" className="text-gray-700 flex items-center space-x-6">
                                    <img src={IndicadoresIcon} alt="Home Icon" className="w-6 h-6" />
                                    <span>Indicadores</span>
                                </a>
                        </Link>
                    </li>
                    <li className="mb-4 hover:bg-hover-blue transition p-2 rounded-md">
                        <Link to={`/Colaborador`}>
                            <a href="#" className="text-gray-700 flex items-center space-x-6">
                                <img src={RankingIcon} alt="Home Icon" className="w-6 h-6" />
                                <span>Colaboradores</span>
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 hover:bg-hover-blue transition p-2 rounded-md">
                        <Link to={`/Gestor`}>
                            <a href="#" className="text-gray-700 flex items-center space-x-6">
                                <img src={PerfilIcon} alt="Home Icon" className="w-6 h-6" />
                                <span>Meu Perfil</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-auto mb-4" >
                <ul>
                    <li className="mb-4 hover:bg-hover-blue transition p-2 rounded-md">
                    <a href="#" className="text-gray-700 flex items-center space-x-6">
                        <img src={ConfigIcon} alt="Home Icon" className="w-6 h-6" />
                        <span>Configurações</span>
                    </a>
                    </li>
                    <li className="mb-4 hover:bg-hover-blue transition p-2 rounded-md">
                    <a href="/" className="text-gray-700 flex items-center space-x-6">
                        <img src={LogoutIcon} alt="Home Icon" className="w-6 h-6" />
                        <span>Sair</span>
                    </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideMenu;
