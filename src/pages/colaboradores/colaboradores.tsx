
import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import Gestor from '../../Interfaces/Gestor';
import './colaboradores.css';
import Colaborador from '../Colaborador';
import api from '../../api';
import { Link } from 'react-router-dom';



const Colaboradores: React.FC = () => {


    function formatDate(inputDate: string): string {
        const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} de ${month}`;
    };
    
    
  const data: Gestor = JSON.parse(localStorage['user']);
    const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);
    const [colaboradores, setColaboradores] = useState<Array<Colaborador>>([]);
    const [assignments, setAssignments] = useState<Array<any>>([]);

    const getColaboradores = async () => {
      try {
          const response = await api.get(`/colaborator/all/${data.id}`);
          if (response.status === 200) {
              setColaboradores(response.data);
          } else {
              
              console.error("Erro ao obter colaboradores");
          }
      } catch (error) {
          console.error("Erro ao obter colaboradores:", error);
      }
  };
    


    const handleSquareClick = (index: number) => {
      setClickedIndexes(prevIndexes =>
        prevIndexes.includes(index) ? prevIndexes.filter(i => i !== index) : [...prevIndexes, index]
      );
    };

    useEffect(() =>{
      getColaboradores()
    },[data.id]);

    const getAssignmentsForColaborator = async (colabId: any) => {
      try {
          const response = await api.get(`/assign/all/colaborator/${colabId}`);
          if (response.status === 200) {
            setAssignments(prevState => ({
              ...prevState,
              [colabId]: response.data
          }));
          } else {
              console.error("Erro ao obter as designações para o colaborador");
          }
      } catch (error) {
          console.error("Erro ao obter as designações para o colaborador:", error);
      }
  };

  useEffect(() => {
    if (colaboradores.length) {
        colaboradores.forEach(colab => {
            getAssignmentsForColaborator(colab.id);
        });
    }

}, [colaboradores]);
  
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
                    {colaboradores.map((row, index) => (
                            <div key={index} className="colab-data-row">
                            <div className="colab-data-campo colab-nome-colaborador">
                                <img src={row.imgUrl} alt="Ícone do Colaborador" className="colab-icon-classname" />
                                <div className="colab-nome-text">
                                    {row.name}
                                    <div className="colab-email-text">
                                    {row.email} 
                                    </div>
                                </div>
                                </div>
                            <div className="colab-data-campo colab-field-cod">{assignments[row.id]?.length || 0}</div>
                            <div className="colab-data-campo colab-field-data">{formatDate(row.dateBirth)}</div>
                            <div 
                                onClick={() => handleSquareClick(index)}
                                className={`clickable-square ${clickedIndexes.includes(index) ? 'clicked' : ''}`}
                            >
                            </div>

                
                              <Link to={`/colaborador?colab=${row.id}`} >
                                    <button className="ver-perfil-btn">Ver Perfil</button>
                              </Link>
                        </div>
                    ))}
                </div>
            </div>
          </main>
        </div>
      );
};

export default Colaboradores;