
import React, { useState } from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import anaIcon from '../../assets/aninhaIcon.png';
import Gestor from '../../Interfaces/Gestor';
import './colaboradores.css';

const mockData = [
    {
      colaborador: 'Camila Xavier',
      cod: '123',
      data: '01/01/2023',
      indicador: '10',
      email: 'camila@email.com', 
    },
    {
      colaborador: 'n sei seila',
      cod: '123',
      data: '01/01/2023',
      indicador: '10',
      email: 'seila@email.com',
    },
    {
      colaborador: 'nsei seila',
      cod: '123',
      data: '01/01/2023',
      indicador: '10',
      email: 'seila@email.com', 
    },
    {
      colaborador: 'Camila Xavier',
      cod: '123',
      data: '01/01/2023',
      indicador: '10',
      email: 'camila@email.com', 
    },
    {
      colaborador: 'Camila Xavier',
      cod: '123',
      data: '01/01/2023',
      indicador: '10',
      email: 'camila@email.com', 
    },
    {
      colaborador: 'Camila Xavier',
      cod: '123',
      data: '01/01/2023',
      indicador: '10',
      email: 'camila@email.com', 
    },
    
    
  ];

const Colaboradores: React.FC = () => {

  const data: Gestor = JSON.parse(localStorage['user']);
    const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);

    const handleSquareClick = (index: number) => {
      setClickedIndexes(prevIndexes =>
        prevIndexes.includes(index) ? prevIndexes.filter(i => i !== index) : [...prevIndexes, index]
      );
    };
  
    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
        <SideMenu/>
        <main className="flex-grow" style={{ backgroundColor: '#FBFBFB' }}>
            <NavigationBar picture={data.imgUrl} name={data.name} />
            <div className="colab-tabela-pai">
           
                <div className="colab-tabela-top">
                    <div className="colab-time">Time X</div>
                    <button className="criar-indicador-btn">
                        Criar Indicador
                    </button>
                </div>
                <div className="colab-tabela-header">
                    <div className="colab-campo colab-campo-nome">Colaborador</div>
                    <div className="colab-campo colab-campo-cod">Nº de Indicadores</div>
                    <div className="colab-campo colab-campo-data">Data</div>
                </div>
                <div className="colab-tabela-data">
                    {mockData.map((row, index) => (
                            <div key={index} className="colab-data-row">
                            <div className="colab-data-campo colab-nome-colaborador">
                                <img src={anaIcon} alt="Ícone do Colaborador" className="colab-icon-classname" />
                                <div className="colab-nome-text">
                                    {row.colaborador}
                                    <div className="colab-email-text">
                                    {row.email} 
                                    </div>
                                </div>
                                </div>
                            <div className="colab-data-campo colab-field-cod">{row.cod}</div> 
                            <div className="colab-data-campo colab-field-data">{row.data}</div> 
                            <div 
                                onClick={() => handleSquareClick(index)}
                                className={`clickable-square ${clickedIndexes.includes(index) ? 'clicked' : ''}`}
                            >
                            </div>

                
                            <button className="ver-perfil-btn">
                                Ver Perfil
                            </button>
                        </div>
                    ))}
                </div>
            </div>
          </main>
        </div>
      );
};

export default Colaboradores;