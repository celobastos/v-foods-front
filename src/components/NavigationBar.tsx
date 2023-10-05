import sinoIcon from './../assets/sinoIcon.png';

interface NavigationBarProps {
    picture: string;
    name: string;
}

const NavigationBar = ({name, picture}: NavigationBarProps) => {
    return (
        <nav className="p-6 flex items-center justify-between space-x-8 flex-grow bg-gray-50">
       
       <div className="flex justify-center flex-grow pl-20 pr-20">
            <div className="flex items-center border rounded-2xl border-gray-300 pt-5 pl-5 pb-5 w-full bg-white">
                <i className="material-icons mr-2"></i>
                <input 
                    type="text" 
                    placeholder="Pesquise Colaboradores e Indicadores..."
                    className="flex-grow  outline-none"
                />
            </div>
        </div>
            
      
        <div className="flex justify-end flex-grow items-end">
            <div className="flex justify-end items-center p-3 w-262px">
                <img src={sinoIcon} alt="Ícone de sino" className="w-28px h-31px mr-20"/>

                <img src={picture} alt="Ícone do usuário Cadu" className="w-[43px] mr-4 rounded-full"/>
                <span>{name}</span>
            </div>
        </div>

        </nav>
    );
};

export default NavigationBar;
