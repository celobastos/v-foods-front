import styles from './index.module.css';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import search from '../../../public/search.svg';
import profile from '../../../public/profile.svg';
import GestorInfo from '../../components/GestorInfo';
import { Link } from 'react-router-dom';
import Colaborador from '../../Interfaces/Colaborador';
//import Indicador from '../../Interfaces/Indicador';
import IndicatorData from '../../Interfaces/indiData';
import { useEffect, useState } from 'react';
import api from '../../api';

export const PerfilGestor = () => {

    const data = JSON.parse(localStorage['user']);
    const [colabData, setcolabData] = useState<Colaborador[]>([{ name: '', email: '', imgUrl: '', id: 0, managerId: 0, cellphone: '', dateBirth: '', address: '' }]);
    const [assignData, setAssignData] = useState<IndicatorData[]>([{ 
      colaboratorId: 0,
      indicatorId: 0,
      month: 0,
      year: 0,
      weight: 0,
      meta: 0,
      superMeta: 0,
      challenge: 0,
      result: 0,
      resultDate: ''
    
    }]);
    //const task: Indicador[] = [{ id: 0, managerId: 0, name: '', description: ''}];

    
    useEffect(() => {
        //Get All Assigns from Manager
        api
          .get(`/colaborator/all/${data.id}`)
          .then((response) => {
            setcolabData(response.data);
            //console.log(colabData);
          })
          .catch(() => {
            //console.error("Error:", error);
          });

        api
          .get(`/assign/all/manager/${data.id}`)
          .then((response) => {
            setAssignData(response.data);
          })
          .catch(() => {
            //console.error("Error:", error);
          });
        
        

        
    }, [assignData, colabData, data.id]);
    //Calculo da meta total alcançada
    let metaAchive: number = 0;
    assignData.forEach((item) => {
        metaAchive += item.result;
    });
    //Calculo da meta total a ser alcançada pelo time
    let metaToAchive = 0;

    assignData.forEach((item) => {
        metaToAchive += item.meta;
    });

    


    return (
        <div className='bg-gray-50 h-screen flex '>
            <SideMenu></SideMenu>
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
                        
                        <p className='text-gray-500 text-sm'>Acompanhe o desenvolvimento dos indicadores criados este mês </p>
                        <div className='flex'>
                            <img className=' rounded-full w-11 h-11 mt-8 -mr-2' src={colabData[0]?.imgUrl}></img>
                            <img className=' rounded-full w-11 h-11 mt-8 -mr-2' src={colabData[1]?.imgUrl}></img>
                            <img className=' rounded-full w-11 h-11 mt-8 -mr-2' src={colabData[2]?.imgUrl}></img>

                        
                        </div>
                        <div className='flex w-full  mt-2 mb-2'>
                            <h1 className='font-semibold text-sm'>Andamento Geral</h1>
                            <p className='ml-auto text-sm'>{Math.round(metaAchive/metaToAchive*100)}%</p>
                            
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                            <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-600" style={{ width: `${metaAchive/metaToAchive*100}%` }}></div>
                        </div>
                    </div>
                        <Link to={`/relatorio`}>
                            <div className="p-2 bg-black text-white rounded-md ml-auto w-24 mt-4">Baixar PDF</div>
                        </Link>
                        <div className={styles['calendar']}>
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
                                    <h1 className='font-semibold text-sm'></h1>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-600" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className=' ml-auto'>
                                <img className=' rounded-full w-11 h-11 mt-2 mr-4' src={colabData[0]?.imgUrl}></img>
                            </div>
                        </div>
                        <div className='flex pt-4 w-full'>
                            <div className=' mr-auto w-1/2'>
                                <div className='flex w-full  mt-2 mb-2'>
                                    <h1 className='font-semibold text-sm'></h1>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-[#626FD9] h-1.5 rounded-full dark:bg-[#169aab]" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                            <div className=' ml-auto'>
                                <img className=' rounded-full w-11 h-11 mt-2 mr-4' src={colabData[1]?.imgUrl}></img>
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
