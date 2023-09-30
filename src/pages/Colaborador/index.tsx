import styles from './index.module.css';
import UserInfo from '../../components/UserInfo';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import useGestorData from '../../components/useGestorData/userGestorData';
import Colaborador from '../../Interfaces/Colaborador';
import { useState, useEffect } from 'react';

const Colaborador = () => {
    
    const data = useGestorData();

    const colabId = (typeof window !== 'undefined' && window.location.search.includes('colab='))
    ? new URLSearchParams(window.location.search).get('colab')
    : 0;

    const [colabData, setcolabData] = useState<Colaborador>({ name: '', address: '', email: '', imgURL: '', id: colabId, teamId: 0, cellphone: '', dateBirth: '', CEP: '' });

    useEffect(() => {
        const ApiUrl = `http://localhost:3000/api/colaborator/${colabId}`; 
    
        fetch(ApiUrl)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then((responseData) => {
            setcolabData(responseData);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
    }, [colabData, colabId]);

    return (
        <div className='bg-gray-100 h-screen flex  pr-36'>
            <SideMenu gestorId={data.id}></SideMenu>
            <div>
            <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
            <div className='flex pt-[50px]'>
                
                <div id='esquerda'>
                    <UserInfo picture={colabData.imgURL} name={colabData.name} cargo='' email={colabData.email}/>
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
                <div id='direita' className=' ml-11'>
                    <div className=' text-right  ml-auto flex'>
                        <div className=' py-2 px-4 border-2 ml-auto rounded-md border-[#d6d6d6] bg-white'>Setembro</div> 
                        <div className='p-2 bg-black text-white rounded-md ml-4'>Baixar PDF</div>
                    </div>
                    <div className={styles['status']}>
                        <div className='flex  mt-5'>
                            <h1 className=' text-lg font-bold'>Resultados recentes</h1>
                        </div>
                        <div className=' flex mt-8 justify-start'>
                            <div>
                                Indicador X
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Colaborador