import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import './homepage.css'
import blueCircle from '../../assets/Circulo azul.svg';
import mais from '../../assets/mais.png';
import HomePageGraph from '../../components/homepageGraph/homepageGraph';
import Colaborador from '../Colaborador';
import api from '../../api';
import IndicatorData from '../../Interfaces/indiData';
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {

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
    function formatDate(inputDate: string): string {
        const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} de ${month}`;
    };
    

    useEffect(() =>{
        getColaboradores()
       getAllAssignments()
    },[data.id]);
    
    useEffect(() => {
        colaboradores.forEach(colab => {
            getAssignmentsForColaborator(colab.id);
        });
    }, [colaboradores]);
    
    
    useEffect(() => {
        if (assignments.length > 0) {
            const avgData = groupByMonthAndAverage(assignments);
            setAveragedData(avgData);
            console.log("algo",avgData);
        }
    }, [assignments]);
    

    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu/>
            <main className="flex-grow bg-gray-50">
                <div className="flex items-center">
                    <div className="flex flex-col space-y-4"style={{ marginLeft: '30px' }} >
                        <h1 className="text-3xl text-black font-bold">Olá, {data.name}!</h1>
                        <h2 className="text-xl text-gray-700">Seja bem-vindo de volta!</h2>
                    </div>
                    <NavigationBar name={data.name} picture={data.imgUrl} />
                </div>
                <div className="div-pai">
                    <div className="grafico">
                    <h1 className="text-grafico">Media Geral dos Indicadores</h1>
                    <HomePageGraph indicatorData={averagedData} />

                    </div>
                    <div className="botoes">
                    <div  className="botao flex items-center cursor-pointer"
                         onClick={() => window.location.href="/relatorio"}
    >
                            <div className="image-content w-1/2 flex justify-center items-center pt-40px">
                            <img src={blueCircle} alt="Descrição da segunda imagem" />
                        </div>
                        <div className="text-content flex flex-col justify-center items-start w-1/2">
                            <h1>Atenção!</h1>
                            <h2>Sua equipe está abaixo da média este mês, clique aqui para saber mais</h2>
                        </div>
                        </div>
                        <div className="botao flex items-center">
                            <div className="image-content w-1/2 flex justify-center items-center pt-40px">
                            <img src={mais} alt="Descrição da segunda imagem" />
                        </div>
                        <div className="text-content flex flex-col justify-center items-start w-1/2">
                            <h1 className="text-black font-bold">Atenção!</h1>
                            <h2 className="text-black">Comece a medir o desempenho dos seus colaboradores a partir de indicadores.</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl text-black font-bold mt-6 text-left pl-24 ">Colaboradores visto recentemente</h1> 
                <div className="tabela-pai mt-5">
                    <div className="tabela-header">
                        <div className="campo">Colaborador</div>
                        <div className="campo1">Cod</div>
                        <div className="campo2">Data</div>
                        <div className="campo3">Indicador</div>
                        <div className="campo4">Status</div>
                    </div>
                    <div className="tabela-data">
                        {colaboradores.map((row, index) => (
                            <div key={index} className="data-row">
                                  <div className="data-campo flex items-center nome-colaborador">
                                    <img src={row.imgUrl} alt="Ícone do Colaborador" className="icon-classname"  />
                                    <div>
                                        <div className="colab-nome-recente-text">{row.name}</div>
                                        <div className="colab-email-recente-text">{row.email}</div>
                                    </div>
                                </div>
                                <div className="data-campo1">{row.id}</div>
                                <div className="data-campo2">{formatDate(row.dateBirth)}</div>

                                <div className="data-campo3">{assignments[row.id]?.length || 0}</div>
                                <div className="data-campo4">{row.managerId}</div>
                                <div className='data-campo-botao'>
                                <Link to={`/colaborador?colab=${row.id}`} >
                                    <button className="botao-ver-perfil">Ver Perfil</button>
                                </Link>
                                </div>
                              

                            </div>
                        ))}
                    </div>

                </div>
               
            </main>
        </div>
    );

};

export default HomePage;


