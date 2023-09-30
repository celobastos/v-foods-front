import styles from './index.module.css';
import UserInfo from '../../components/UserInfo';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import useGestorData from '../../components/useGestorData/userGestorData';
import { Link } from 'react-router-dom';

export const PerfilGestor = () => {

    const data = useGestorData();
    return (
        <div className='bg-gray-50 h-screen flex '>
            <SideMenu gestorId={data.id}></SideMenu>
            <div>
                <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
            <div className='flex pt-[50px]'>
                <div id='esquerda'>
                    <UserInfo picture={data.imgUrl} name={data.name} cargo='' email={data.email}/>
                    <div className={styles['metas']}>
                        <div className='flex w-full  mt-5'>
                            <h1 className=' text-lg font-bold mt-4'>Time X</h1>
                            <p className=' ml-auto text-sm  text-red-600 font-semibold'>ver todos os colaboradores  </p>
                        </div>
                        
                        <p className='text-gray-500 text-sm'>Acompanhe o desenvolvimento dos indicadores criados este mês</p>
                        <div className='flex'>
                            <img className=' rounded-full w-11 h-11 mt-8 -mr-2' src='https://m.media-amazon.com/images/M/MV5BYWUzNzA4YWUtYWViYy00Zjg1LWE4ODEtZDYwOTAzMTg3YTZhXkEyXkFqcGdeQXVyNjg0NjE4OTM@._V1_QL75_UX140_CR0,12,140,140_.jpg'></img>
                            <img className=' rounded-full w-11 h-11 mt-8 -mr-2' src='https://a.wattpad.com/useravatar/Hakkaiproperty.256.605649.jpg'></img>
                            <img className=' rounded-full w-11 h-11 mt-8 -mr-2' src='https://profile-images.xing.com/images/559ea8811fd76869d487e305883cb8a0-1/marine-messager.256x256.jpg'></img>

                        
                        </div>
                        <div className='flex w-full  mt-2 mb-2'>
                            <h1 className='font-semibold text-sm'>Andamento Geral</h1>
                            <p className='ml-auto text-sm'>80%</p>
                            
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                            <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-600" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
                <div id='direita'>
                    <div className='flex'>
                        <div className=' h-[148px] w-[228px] rounded-[14px] bg-black ml-16 p-4 flex justify-start'>
                            <div className=' text-white text-8xl font-bold z-10'>
                                <p className='mr-4'>+</p>
                            </div>
                            <div className='text-white  mt-11 font-semibold'>
                                <p>Criar indicador</p>
                            </div>

                        </div>
                        <Link to={`/addColaborador?id=${data.id}`}>
                        <div className='h-[148px] w-[228px] rounded-[14px] bg-[#E51110] ml-4 flex px-6 pt-10'>
                            <img src={'https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg'} className=' w-32 h-16 mr-4'></img>
                            <div className=' text-white font-semibold mt-2'>
                                <p>Adicionar colaborador</p>
                            </div>
                        </div>
                        </Link>
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
                    <footer className=' text-right  mt-8 flex'>
                        <div className=' py-2 px-4 border-2 ml-auto rounded-md border-[#d6d6d6]'>Setembro</div> 
                        <div className='p-2 bg-black text-white rounded-md ml-4'>Baixar PDF</div>
                    </footer>
                </div>
            </div>
            </div>
        </div>
    )
}
