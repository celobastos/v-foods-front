import useAssignData from "../useAssignData";
import Assing from "../../Interfaces/Assign";

const TabelaIndicadores = () => {
    
    const indicadores = useAssignData();
    return( 
        <section className='m-10'>
        <div className='tabela'>
            <p className='font-bold'>Indicadores do mês</p>
            <div className="flex justify-between h-12">
                <p className="flex-1">nome</p>
                <p className="flex-1">Cod</p>
                <p className="flex-1">Criação</p>
                <button className='flex-1 text-right text-red-700 font-bold'>Ver Todos</button>

            </div>
            <div className="flex justify-between ">
                    <p className="flex-1">Vendas </p>
                    <p className="flex-1">1</p>
                    <p className="flex-1">Setembro </p>
                    <button className="flex-1 bg-black text-white rounded-md m--1 ">Adicionar resultado</button>
                </div>
                {indicadores.map((indicador: Assing) => (
                <div className="flex justify-between">
                    <p className="flex-1">{indicador.indicator.name} </p>
                    <p className="flex-1">{indicador.indicatorId}</p>
                    <p className="flex-1">{indicador.month} </p>
                    <button className="flex-1 bg-black text-white">Adicionar resultado</button>
                </div>
                ))}   
        </div> 
        <div className="text-right">
            <button className='bg-red-600 text-center p-1 pr-7 pl-7 borde-1 mt-2 border-gray-300 rounded-md text-white'>Criar novo indicador</button>
        </div>
    </section>
   )
};
export default TabelaIndicadores;