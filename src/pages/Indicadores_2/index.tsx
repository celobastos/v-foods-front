import React from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import TabelaIndicadores from '../../components/IndcMesAtual';
import MedGeral from '../../components/MedGeral';
import ColabPIndic from '../../components/ColaboraPorIndicador/colaboraPIndicador';

const Indicadores_2: React.FC = () => {
  
    const data = JSON.parse(localStorage['user']);

    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu />
            <main className="flex-grow bg-gray-50">
                <div className="flex items-center">
                    <NavigationBar name={data.name} picture={data.imgUrl}/>
                </div>  
                <section className= 'flex p-30'>
                    <ColabPIndic></ColabPIndic>
                    <section className='m-10'>
                        <section className='border border-gray-400 rounded-lg p-8'> 
                            <MedGeral></MedGeral>
                        </section>
                        <TabelaIndicadores></TabelaIndicadores>
                    </section>
                    
               </section>
            </main>
        </div>
    );

};

export default Indicadores_2;