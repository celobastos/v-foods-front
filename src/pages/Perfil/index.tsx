import styles from './index.module.css';
import UserInfo from '../../components/UserInfo';

export const PerfilGestor = () => {
  return (
    <div className='bg-[#fbfbfb] h-screen'>
        <div className='flex '>
            <div id='esquerda'>
                 <UserInfo picture={'c1'} name='Maria Clara N.' cargo='' email='Amale@gmail.com'/>
                <div className={styles['metas']}>
                    <h1 className=' text-lg font-bold mt-5'>Metas concluidas deste mês</h1>
                    <p className='text-gray-500 text-right text-sm'>23 de Setembro</p>
                    <div className=' flex mt-[10px] justify-start'>
                        <p className='text-2xl font-bold'>60%</p>
                        <div className='text-sm h-7 w-56 rounded-md bg-teal-400 ml-8 mt-1 p-[2px] pl-2'><span className=' font-semibold'>4.7%</span> em comparaçao ao mês anterior</div>
                    </div>
                    <p className='text-gray-500 text-sm'>concluídos</p>
                    <img src='images\graph1.png'></img>
                </div>
            </div>
            <div id='direita'>
                <div className='mt-[155px] flex'>
                    <div className=' h-[138px] w-[218px] rounded-[14px] bg-black ml-16 p-4 flex justify-start'>
                        <div className=' text-white text-8xl font-bold z-10'>
                            <p className='mr-4'>+</p>
                        </div>
                        <div className='text-white  mt-8 font-semibold'>
                            <p>Criar indicador</p>
                        </div>

                    </div>
                    <div className='h-[138px] w-[218px] rounded-[14px] bg-[#E51110] ml-4 flex px-6 pt-10'>
                        <img src='images/newColab.png' className=' w-24 h-16 mr-4'></img>
                        <div className=' text-white font-semibold mt-2'>
                            <p>Adicionar colaborador</p>
                        </div>
                    </div>
                </div>
                <div className={styles['status']}>
                    <div className='flex  mt-5'>
                        <h1 className=' text-lg font-bold'>Status de metas</h1>
                        <p className='text-gray-500 text-right text-sm ml-auto border px-8 py-1'>Editar</p>
                    </div>
                    <p className='text-gray-500 text-sm'>Status de diferentes indicadores e de Todos os colaboradores</p>
                    <div className=' flex mt-8 justify-start'>
                        <div>
                            GRÁFICO PIZZA
                        </div>
                        <div className=' ml-4'>
                            <div className='flex align-middle  mb-4'>
                                <div className='bg-[#E51110] p-1 text-white rounded-md'>80%</div>
                                <div className='ml-4 text-lg font-semibold text-[#E51110]'>meta</div>
                            </div>
                            <div className='flex align-middle  mb-4'>
                                <div className='bg-[#626FD9] p-1 text-white rounded-md'>15%</div>
                                <div className='ml-4 text-lg font-semibold text-[#626FD9]'>supermeta</div>
                            </div>
                            <div className='flex align-middle  mb-4'>
                                <div className='bg-[#169aab] p-1 text-white rounded-md text-justify'>05%</div>
                                <div className='ml-4 text-lg font-semibold text-[#169aab]'>desafio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className=' text-right  mt-8 ml-auto mr-32 flex'>
            <div className=' py-2 px-4 border-2 ml-auto rounded-md border-[#d6d6d6]'>Setembro</div> 
            <div className='p-2 bg-black text-white rounded-md ml-4'>Baixar PDF</div>
        </footer>
    </div>
  )
}
