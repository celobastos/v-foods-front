import MedGeralGraph from "./graphMedGeral";
const MedGeral = () => {
    return (
        <section className=''> 
                            <div>
                                <p className='font-bold'>
                                    Média geral dos indicadores.
                                </p>
                                <p className='text-gray-600'>
                                    Acompanhe a média da meta, supermeta e desafio geral desse mês.
                                </p>
                            </div>
                            <div className='flex m-5'>
                                <div className="mr-4 w-auto h-auto m-5">
                                    <ol>
                                        <li className='text-red-700 font-bold'>Meta</li>
                                        <li className='text-green-700 font-bold'>Super Meta</li>
                                        <li className='text-blue-700 font-bold'>Desafio</li>
                                    </ol>
                                </div>
                                <div className="mr-4 w-auto h-auto m-5">
                                    <MedGeralGraph></MedGeralGraph>
                                </div>
                            </div>
                        </section>

    );
};
export default MedGeral;