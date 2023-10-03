import styles from './index.module.css';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import useGestorData from '../../components/useGestorData/userGestorData';
import search from '../../../public/search.svg';
import profile from '../../../public/profile.svg';
import GestorInfo from '../../components/GestorInfo';
import { Link } from 'react-router-dom';

export const PerfilGestor = () => {

    const data = useGestorData();
    return (
        <div className='bg-gray-50 h-screen flex '>
            <SideMenu gestorId={data.id}></SideMenu>
            <div>
                <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
            <div className='flex'>
                <div id='esquerda'>
                    <GestorInfo picture={data.imgUrl} name={data.name} cargo='' email={data.email} socials='linkedin.com/in/josé-sanches'/>
                    <div className={styles['metas']}>
                        <div className='flex w-full'>
                            <h1 className=' text-lg font-bold'>Time X</h1>
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
                    <div className={styles['calendar']}>
                        Calendar
                    </div>
                </div>
                <div id='direita'>
                    <div className={styles['status']}>
                        <div className='flex  mt-5'>
                            <h1 className=' text-lg font-bold'>Status por colaborador </h1>
                            <p className='text-gray-500 text-right text-sm ml-auto'>
                            <img src={search}></img>
                            </p>
                        </div>
                        <p className='text-gray-500 text-sm border-b border-gray-300 pb-4 w-full'>Acompanhe o desenvolvimento por perfil</p>
                        <div className='flex text-gray-500 text-sm border-b border-gray-300 py-4 w-full'>
                            <p className=' mr-auto'>Indicador</p>
                            <p className=' ml-auto'>Colaborador</p>
                        </div>

                        <div className='flex pt-4 w-full'>
                            <div className=' mr-auto w-1/2'>
                                <div className='flex w-full  mt-2 mb-2'>
                                    <h1 className='font-semibold text-sm'>Indicador X</h1>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-600" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className=' ml-auto'>
                                <img className=' rounded-full w-11 h-11 mt-2 mr-4' src='https://profile-images.xing.com/images/559ea8811fd76869d487e305883cb8a0-1/marine-messager.256x256.jpg'></img>
                            </div>
                        </div>
                        <div className='flex pt-4 w-full'>
                            <div className=' mr-auto w-1/2'>
                                <div className='flex w-full  mt-2 mb-2'>
                                    <h1 className='font-semibold text-sm'>Indicador Y</h1>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-600" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className=' ml-auto'>
                                <img className=' rounded-full w-11 h-11 mt-2 mr-4' src='https://m.media-amazon.com/images/M/MV5BYWUzNzA4YWUtYWViYy00Zjg1LWE4ODEtZDYwOTAzMTg3YTZhXkEyXkFqcGdeQXVyNjg0NjE4OTM@._V1_QL75_UX140_CR0,12,140,140_.jpg'></img>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles['addColab']}>
                        <div className='flex p-6'>
                            <img src={profile} className=' ml-auto mr-4'></img>
                            <Link to={`/AddColaborador?id=${data.id}`}>
                            <div className='my-auto mr-auto '>
                                <p className='font-bold text-xl'>Adicionar perfil</p>                           
                                <p className='text-gray-500 text-sm'>Adicione um novo colaborador a sua equipe!</p>
                            </div>
                            </Link>
                        </div>

                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}
