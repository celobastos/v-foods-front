import React from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import Rectangle from '../../assets/Rectangle 117.png'
import blueCircle from '../../assets/Circulo azul.svg';
import './indicadores.css';
import { useState, useEffect } from 'react';
import Gestor from '../../Interfaces/Gestor';


const Indicadores: React.FC = () => {
  
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

    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu gestorId={data.id}/>
            <main className="flex-grow bg-background-color"style={{ backgroundColor: '#FBFBFB' }}>
                <div className="flex items-center">
                    <NavigationBar name={data.name} picture={data.imgUrl}/>
                </div>
                    <div className="div-pai">
                    <div className="botoesIndicadores">
                        <div className="botaoIndicadores flex items-center">
                            <div className="image-content w-1/2 flex justify-center items-center pt-40px">
                            <img src={blueCircle} alt="Descrição da segunda imagem" />
                        </div>
                        <div className="text-content flex flex-col justify-center items-start w-1/2">
                            <h1>Atenção!</h1>
                            <h2>Sua equipe está abaixo da média este mês, clique aqui para saber mais</h2>
                        </div>
                        </div>
                        <div className="botaoE flex items-center">
                            <div className="image-content w-1/2 flex justify-center items-center pt-40px">
                            <img src={blueCircle} alt="Descrição da segunda imagem" />
                        </div>
                        <div className="text-content flex flex-col justify-center items-start w-1/2">
                            <h1>Atenção!</h1>
                            <h2>Sua equipe está abaixo da média este mês, clique aqui para saber mais</h2>
                        </div>
                        </div>
                    </div>
                        <div className="grafico">
                        <img src={Rectangle} alt="Descrição da imagem" />
                        </div>
                    </div>
                    <div className="div-pai">
                        <div className="grafico">
                        <img src={Rectangle} alt="Descrição da imagem" />
                        </div>
                        <div className="grafico">
                        <img src={Rectangle} alt="Descrição da imagem" />
                        </div>
                    </div>
        
        
                
               
            </main>
        </div>
    );

};

export default Indicadores;