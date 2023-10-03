import React from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';

import Rectangle from '../../assets/Rectangle 117.png'
import blueCircle from '../../assets/Circulo azul.svg';
import anaIcon from '../../assets/aninhaIcon.png';


const Colaboradores : React.FC = () => {
    

    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu />
            <main className="flex-grow bg-background-color"style={{ backgroundColor: '#FBFBFB' }}>
               
                    <NavigationBar />
                
               
            </main>
        </div>
    );

};

export default Colaboradores;