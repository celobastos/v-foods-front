import React from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import './homepage.css'
import Rectangle from '../../assets/Rectangle 117.png'
import blueCircle from '../../assets/Circulo azul.svg';
import anaIcon from '../../assets/aninhaIcon.png';
import { useState, useEffect } from 'react';
import Gestor from '../../Interfaces/Gestor';


const HomePage: React.FC = () => {
    const [data, setData] = useState<Gestor>({ name:'', password:'', email:'', imgUrl:'', id: 0});
    const idGestor = (typeof window !== 'undefined' && window.location.search.includes('id='))
        ? new URLSearchParams(window.location.search).get('id')
        : 'defaultId';

        useEffect(() => {
            const ApiUrl = `http://localhost:3000/api/user/?userId=${idGestor}`; 
        
            fetch(ApiUrl)
            .then((response) => {
                if (!response.ok) {
                throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then((responseData) => {
                setData(responseData);
                console.log(data);
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
        }, [data, idGestor]);

    const mockData = [
        {
            colaborador: "João Bastos",
            cod: "2",
            data: "04 de abril",
            indicador: "A",
            status: "Ativo"
        },
        {
            colaborador: "Mari Santos",
            cod: "1",
            data: "04 de abril",
            indicador: "B",
            status: "Ativo"
        }
    ];
    

    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu gestorId={data.id}/>
            <main className="flex-grow bg-background-color"style={{ backgroundColor: '#FBFBFB' }}>
                <div className="flex items-center">
                    <div className="flex flex-col space-y-4"style={{ marginLeft: '30px' }} >
                        <h1 className="text-3xl text-black font-bold">Olá, {data.name}!</h1>
                        <h2 className="text-xl text-gray-700">Seja bem-vindo de volta!</h2>
                    </div>
                    <NavigationBar name={data.name} picture={data.imgUrl} />
                </div>
                <div className="div-pai">
                    <div className="grafico">
                    <img src={Rectangle} alt="Descrição da imagem" />
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
                            <h1>Atenção!</h1>
                            <h2>Sua equipe está abaixo da média este mês, clique aqui para saber mais</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl text-black font-bold mt-6 text-left pl-48">Visto Recente</h1> 
                <div className="tabela-pai">
                    <div className="tabela-header">
                        <div className="campo">Colaborador</div>
                        <div className="campo">Cod</div>
                        <div className="campo">Data</div>
                        <div className="campo">Indicador</div>
                        <div className="campo">Status</div>
                    </div>
                    <div className="tabela-data">
                        {mockData.map((row, index) => (
                            <div key={index} className="data-row">
                                  <div className="data-campo flex items-center nome-colaborador">
                                    <img src={anaIcon} alt="Ícone do Colaborador" className="icon-classname"  />
                                    {row.colaborador}
                                </div>
                                <div className="data-campo">{row.cod}</div>
                                <div className="data-campo">{row.data}</div>
                                <div className="data-campo">{row.indicador}</div>
                                <div className="data-campo">{row.status}</div>
                            </div>
                        ))}
                    </div>

                </div>
               
            </main>
        </div>
    );

};

export default HomePage;