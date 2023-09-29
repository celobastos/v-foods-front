import React from 'react';
import Logo from '../../assets/Logo.svg';
import './relatorio.css'


const Relatorio: React.FC = () => {
    

    return (
        <div className="div-total">

          <div className="div-top">
          <div className="flex items-center">
          <img src={Logo} alt="logo" />
                    <div className="header flex flex-col space-y-4" >
                       
                        
                            <h1 className="string-relatorio text-3xl text-black font-bold">Relatorio do mes de Setembro</h1>
                        
                    </div>
               
            </div>
            <div className="flex items-center" ></div>
        
          </div>
         
          <div className="div-bottom">
                <div className="div-item">1
                </div>
                <div className="div-item2">2
                </div>
                <div className="div-item3">3
                </div>
                <div className="div-item4">4
                </div>
                <div className="div-item5">5
                </div>
                <div className="div-item6">6
                </div>
            </div>
            
        </div>  
      
    );

};

export default Relatorio;