import React from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import './homepage.css'
import blueCircle from '../../assets/Circulo azul.svg';
import anaIcon from '../../assets/aninhaIcon.png';
import useGestorData from '../../components/useGestorData/userGestorData';
import HomePageGraph from '../../components/homepageGraph/homepageGraph';


const HomePage: React.FC = () => {

    const data = JSON.parse(localStorage['user']);

    const mockData = [
        {
            colaborador: "algum usuario qualquer",
            cod: "2",
            data: "04 de abril",
            indicador: "A",
            status: "Ativo",
            email: 'camila@email.com', 
        },
        {
            colaborador: "sei la",
            cod: "1",
            data: "04 de abril",
            indicador: "B",
            status: "Ativo",
            email: 'seila@email.com', 
        }
    ];
    const mockIndicatorData = [
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 1,
            year: 2023,
            weight: 50,
            meta: 50,
            superMeta: 75,
            challenge: 90,
            result: 70,
            resultDate: '2023-01-15'
        },
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 2,
            year: 2023,
            weight: 60,
            meta: 60,
            superMeta: 80,
            challenge: 85,
            result: 65,
            resultDate: '2023-02-15'
        },
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 3,
            year: 2023,
            weight: 60,
            meta: 60,
            superMeta: 80,
            challenge: 85,
            result: 65,
            resultDate: '2023-03-15'
        },
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 7,
            year: 2023,
            weight: 60,
            meta: 60,
            superMeta: 80,
            challenge: 85,
            result: 65,
            resultDate: '2023-03-15'
        },
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 6,
            year: 2023,
            weight: 60,
            meta: 60,
            superMeta: 80,
            challenge: 85,
            result: 65,
            resultDate: '2023-03-15'
        },
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 4,
            year: 2023,
            weight: 60,
            meta: 60,
            superMeta: 80,
            challenge: 85,
            result: 65,
            resultDate: '2023-03-15'
        },
        {
            colaboratorId: 1,
            indicatorId: 1,
            month: 5,
            year: 2023,
            weight: 60,
            meta: 60,
            superMeta: 80,
            challenge: 85,
            result: 65,
            resultDate: '2023-03-15'
        }
  
    ];
    
    
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
                    <HomePageGraph indicatorData={mockIndicatorData} />

                    </div>
                    <div className="botoes">
                        <div className="botao flex items-center">
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
                            <img src={blueCircle} alt="Descrição da segunda imagem" />
                        </div>
                        <div className="text-content flex flex-col justify-center items-start w-1/2">
                            <h1 className="text-black font-bold">Atenção!</h1>
                            <h2 className="text-black">Sua equipe está abaixo da média este mês, clique aqui para saber mais</h2>
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
                        {mockData.map((row, index) => (
                            <div key={index} className="data-row">
                                  <div className="data-campo flex items-center nome-colaborador">
                                    <img src={anaIcon} alt="Ícone do Colaborador" className="icon-classname"  />
                                    <div>
                                        <div className="colab-nome-recente-text">{row.colaborador}</div>
                                        <div className="colab-email-recente-text">{row.email}</div>
                                    </div>
                                </div>
                                <div className="data-campo1">{row.cod}</div>
                                <div className="data-campo2">{row.data}</div>
                                <div className="data-campo3">{row.indicador}</div>
                                <div className="data-campo4">{row.status}</div>
                                <button className="botao-ver-perfil">Ver Perfil</button>
                            </div>
                        ))}
                    </div>

                </div>
               
            </main>
        </div>
    );

};

export default HomePage;