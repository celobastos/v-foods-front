import React, { useState } from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import SearchPageGraph from '../../components/searchPageGraph/searchPageGraph';
import anaIcon from '../../assets/aninhaIcon.png';
import './buscaIndicadores.css';

const BuscaIndicadores: React.FC = () => {
    const [showGraph, setShowGraph] = useState(false);
    const [view, setView] = useState<'COLABORADORES' | 'MEDIA'>('COLABORADORES');
    


    const mockData = [
        {
          colaborador: 'Camila Xavier',
          cod: '123',
          data: '01/01/2023',
          indicador: '10',
          email: 'camila@email.com', 
          status:'meta'
        },
        {
          colaborador: 'n sei seila',
          cod: '123',
          data: '01/01/2023',
          indicador: '10',
          email: 'seila@email.com',
          status:'meta'
        },
        {
          colaborador: 'nsei seilaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          cod: '123',
          data: '01/01/2023',
          indicador: '10',
          email: 'seila@email.com', 
          status:'meta'
        },
        {
          colaborador: 'Camila Xavier',
          cod: '123',
          data: '01/01/2023',
          indicador: '10',
          email: 'camila@email.com', 
          status:'meta'
        },
        {
          colaborador: 'Camila Xavier',
          cod: '123',
          data: '01/01/2023',
          indicador: '10',
          email: 'camila@email.com', 
          status:'meta'
        },
        {
          colaborador: 'Camila Xavier',
          cod: '123',
          data: '01/01/2023',
          indicador: '10',
          email: 'camila@email.com',
          status:'meta'
        },
        
        
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
        ,
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
        ,
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
            <SideMenu gestorId={0} />
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
                            <SearchPageGraph indicatorData={mockIndicatorData} />
                         </div>
                    ) : (
                        <>
                            <div className="search-tabela-header">
                                <div className="search-campo search-campo-nome">Colaborador</div>
                                <div className="search-campo search-campo-cod">Início</div>
                                <div className="search-campo search-campo-data">Status</div>
                            </div>
                            <div className="search-tabela-data">
                                {mockData.map((row, index) => (
                                    <div key={index} className="search-data-row">
                                        <img src={anaIcon} alt="Ícone do Colaborador" className="search-icon-classname" />
                                        <div className="search-nome-text">
                                            {row.colaborador}
                                            <div className="search-email-text">
                                                {row.email} 
                                            </div>
                                        </div>
                                        <div className="search-data-campo search-field-cod">{row.data}</div> 
                                        <div className="search-data-campo search-field-status">{row.status}</div> 
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