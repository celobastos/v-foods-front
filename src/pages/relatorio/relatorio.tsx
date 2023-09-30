import React from 'react';
import Logo from '../../assets/Logo.svg';
import './relatorio.css'
import graf1 from '../../assets/Group 7.png'
import graf2 from '../../assets/Group 4.png'
import graf3 from '../../assets/Group 6.png'
import anaIcon from '../../assets/aninhaIcon.png'


const Relatorio: React.FC = () => {
    

    return (
        <div className="div-total">

            <div className="div-top">
                        <div className="logo-container">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="header-container">
                            <div className="header flex flex-col space-y-4">
                                <h1 className="string-relatorio text-3xl text-black font-bold">Relatorio do mes de Setembro</h1>
                            </div>
                        </div>
            </div>
         
          <div className="div-bottom">
           <div className="div-item">
                <div className="header-group">
                    <h1>Relatorio 1 </h1>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui
                    </h2>
                </div>
                <div className="header-group">
                    <h1>Relatorio 2</h1>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui
                    </h2>
                </div>
            </div>

            <div className="div-item4">
                <h1>Historico de Indicadores</h1>
                
            </div>


            <div className="grafs-container">
                <h1>Grafico de metas</h1>
                <div className="images">
                    <img src={graf1} alt="Imagem 1" />
                    <img src={graf2}  alt="Imagem 2" />
                    <img src={graf3} alt="Imagem 3" />
                </div>
                <div className="strings">
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>

                <div className="div-item2">
                    <h1>Destaques do mes</h1>
                    <div className="user-info">
                        <img src={anaIcon} alt="user icon" className="user-icon"/>
                        <div>
                            <p className="user-name">João</p>
                            <p className="user-email">joao@email.com</p>
                            <p className="user-indicator">XYZ</p>
                        </div>
                    </div>
                    <div className="user-info">
                        <img src={anaIcon} alt="user icon" className="user-icon"/>
                        <div>
                            <p className="user-name">Maria</p>
                            <p className="user-email">maria@email.com</p>
                            <p className="user-indicator">ABC</p>
                        </div>
                    </div>
                    <div className="user-info">
                        <img src={anaIcon} alt="user icon" className="user-icon"/>
                        <div>
                            <p className="user-name">Maria</p>
                            <p className="user-email">maria@email.com</p>
                            <p className="user-indicator">ABC</p>
                        </div>
                    </div>
            </div>
            <div className="header-group2">
                    <h1>Relatorio 2</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui
                    </h2>
                </div>
                <div className="div-item6">
                    <div className="signatures">
                        <div className="signature-container">
                            <input type="text" id="signature1" className="signature" />
                            <label htmlFor="signature1" className="signature-label">Diretor</label>
                        </div>
                        <div className="signature-container">
                            <input type="text" id="signature2" className="signature" />
                            <label htmlFor="signature2" className="signature-label">Coordenador</label>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>  
      
    );

};

export default Relatorio;