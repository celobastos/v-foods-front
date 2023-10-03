import styles from "./index.module.css";
import UserInfo from "../../components/UserInfo";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavigationBar from "../../components/NavigationBar";
import useGestorData from "../../components/useGestorData/userGestorData";
import Colaborador from "../../Interfaces/Colaborador";
import { useState, useEffect } from "react";
import api from "../../api";

const Colaborador = () => {
  const data = useGestorData();

  const colabId =
    typeof window !== "undefined" && window.location.search.includes("colab=") ? new URLSearchParams(window.location.search).get("colab") : 0;

    const [colabData, setcolabData] = useState<Colaborador>({ name: '', email: '', imgUrl: '', id: colabId, managerId: 0, cellphone: '', dateBirth: '', address: '' });


  useEffect(() => {
    api
      .get("/colaborator/", {
        params: {
          colabId: colabId,
        },
      })
      .then((response) => {
        setcolabData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [colabData, colabId]);

    return (
        <div className='bg-gray-50 h-screen flex  pr-36'>
            <SideMenu gestorId={data.id}></SideMenu>
            <div>
                <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
                <div className='flex pt-[50px]'>
                    
                    <div id='esquerda'>
                        <div className='p-2 bg-[#E51110] text-white rounded-md ml-[60px] w-32 mb-4'>Criar indicador</div>
                        <UserInfo picture={colabData.imgUrl} name={colabData.name} cargo='' email={colabData.email} cellphone={colabData.cellphone}/>
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
                
                    <div id="direita" className=" ml-11">
                        <div className=" text-right  ml-auto flex">
                            <div className=" py-2 px-4 border-2 ml-auto rounded-md border-[#d6d6d6] bg-white">Setembro</div>
                            <div className="p-2 bg-black text-white rounded-md ml-4">Baixar PDF</div>
                        </div>
                        <div className={styles["status"]}>
                            <div className="flex  mt-5">
                                <h1 className=" text-lg font-bold">Resultados recentes</h1>
                            </div>
                            <div className="mt-8 justify-start">
                                <p className="text-lg font-semibold mb-2">Indicador X</p>
                                <div>
                                <div className="align-middle  mb-4">
                                    <div className="flex w-full  mt-2 mb-2">
                                    <h1 className="font-semibold text-sm">Meta</h1>
                                    <p className="ml-auto text-sm">80%</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-600" style={{ width: "80%" }}></div>
                                    </div>
                                    <div className="flex w-full  mt-2 mb-2">
                                    <h1 className="font-semibold text-sm">Supermeta</h1>
                                    <p className="ml-auto text-sm">50%</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-[#626FD9] h-1.5 rounded-full dark:bg-[#626FD9]" style={{ width: "50%" }}></div>
                                    </div>
                                    <div className="flex w-full  mt-2 mb-2">
                                    <h1 className="font-semibold text-sm">Desafio</h1>
                                    <p className="ml-auto text-sm">15%</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                                    <div className="bg-[#169aab] h-1.5 rounded-full dark:bg-[#169aab]" style={{ width: "15%" }}></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Colaborador;
