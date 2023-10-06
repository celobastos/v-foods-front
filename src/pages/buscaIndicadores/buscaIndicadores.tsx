import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import SearchPageGraph from '../../components/searchPageGraph/searchPageGraph';
import anaIcon from '../../assets/aninhaIcon.png';
import './buscaIndicadores.css';
import IndicatorData from '../../Interfaces/indiData';
import api from '../../api';
import Colaborador from '../Colaborador';

const BuscaIndicadores: React.FC = () => {
    const [view, setView] = useState<'COLABORADORES' | 'MEDIA'>('COLABORADORES');
    const data = JSON.parse(localStorage['user']);

    const [colaboradores, setColaboradores] = useState<Array<Colaborador>>([]);
    const [assignments, setAssignments] = useState<Array<any>>([]);
    const [averagedData, setAveragedData] = useState<any[]>([]);

    
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

    const getAllAssignments = async () => {
        try {
            const response = await api.get(`/assign/all/manager/${data.id}`);
            if (response.status === 200) {
                setAssignments(response.data);
            } else {

                console.error("Erro ao obter todas as designações");
            }
        } catch (error) {
            console.error("Erro ao obter todas as designações:", error);
        }
    };
    function groupByMonthAndAverage(assignments: IndicatorData[]) {
        const grouped = assignments.reduce((acc: any, item) => {
            if (!acc[item.month]) {
                acc[item.month] = {
                    month: item.month,
                    count: 0,
                    totalMeta: 0,
                    totalSuperMeta: 0,
                    totalChallenge: 0,
                };
            }
            acc[item.month].count++;
            acc[item.month].totalMeta += item.meta;
            acc[item.month].totalSuperMeta += item.superMeta;
            acc[item.month].totalChallenge += item.challenge;
            return acc;
        }, {});
    
        const result = Object.values(grouped).map((group: any) => {
            return {
                month: group.month,
                avgMeta: group.totalMeta / group.count,
                avgSuperMeta: group.totalSuperMeta / group.count,
                avgChallenge: group.totalChallenge / group.count,
            };
        });
        
    
        return result;
    }

    useEffect(() =>{
        getColaboradores()
       getAllAssignments()
    },[data.id]);
    
    useEffect(() => {
        if (assignments.length > 0) {
            const avgData = groupByMonthAndAverage(assignments);
            setAveragedData(avgData);
            console.log("algo",avgData);
        }
    }, [assignments]);


    console.log("TO AQ" ,colaboradores);
    console.log("TO la" ,assignments);


      return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu />
            <main className="flex-grow" style={{ backgroundColor: '#FBFBFB' }}>
                <NavigationBar picture={''} name={''} />
                <div className="search-tabela-pai">
                    <div className="search-tabela-top">
                        <button 
                            onClick={() => setView('COLABORADORES')}
                            className={`toggle-button ${view === 'COLABORADORES' ? 'active' : ''}`}
                        >
                            Colaboradores
                        </button>
                        <button 
                            onClick={() => setView('MEDIA')}
                            className={`toggle-button ${view === 'MEDIA' ? 'active' : ''}`}
                        >
                            Média Geral
                        </button>
                    </div>
                    {view === 'MEDIA' ? (
                         <div className="graph-container">
                            <h1 className='h1-text'>Media Geral dos Indicadores </h1>
                            <SearchPageGraph indicatorData={averagedData} />
                         </div>
                    ) : (
                        <>
                            <div className="search-tabela-header">
                                <div className="search-campo search-campo-nome">Colaborador</div>
                                <div className="search-campo search-campo-cod">Início</div>
                                <div className="search-campo search-campo-data">Status</div>
                            </div>
                            <div className="search-tabela-data">
                                {colaboradores.map((row, index) => (
                                    <div key={index} className="search-data-row">
                                        <img src={anaIcon} alt="Ícone do Colaborador" className="search-icon-classname" />
                                        <div className="search-nome-text">
                                            {row.name}
                                            <div className="search-email-text">
                                                {row.email} 
                                            </div>
                                        </div>
                                        <div className="search-data-campo search-field-cod">{row.dateBirth}</div> 
                                        <div className="search-data-campo search-field-status">{row.managerId}</div> 
                                        <button className="ver-perfil-btn">
                                            Ver Perfil
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default BuscaIndicadores;