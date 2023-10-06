import ColabIndicadorGraph from "./graphColaboradorPIndicador";
const ColabPIndic = () => {
    return(
        <section className= 'flex p-30'>
             <section className='border-1 border border-gray-400 rounded-lg p-6 m-10'>
                       <div>
                        <p className='font-bold'>
                            Colaboradores por indicador
                        </p>
                        <p className='text-gray-600'>
                            Quantidade de colaboradores com cada indicador
                        </p>
                       </div>
                       <div className='m-10'>
                            <ColabIndicadorGraph></ColabIndicadorGraph>
                       </div>
                       <div className='flex justify-between p-6'>
                        <p>
                            Indicador
                        </p>
                        <p>
                            N° de Colaboradores
                        </p>
                       </div>
                       <div>

                       </div>
                    </section>
        </section>
                   
    )
}
export default ColabPIndic;