import React from 'react';
import SideMenu from '../../components/SideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import Rectangle from '../../assets/Rectangle 117.png'
import blueCircle from '../../assets/Circulo azul.svg';
import './indicadores.css'


const Indicadores: React.FC = () => {
  

    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu />
            <main className="flex-grow bg-background-color"style={{ backgroundColor: '#FBFBFB' }}>
                <div className="flex items-center">
                    <NavigationBar />
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