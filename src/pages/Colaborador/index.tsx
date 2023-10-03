import styles from "./index.module.css";
import UserInfo from "../../components/UserInfo";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavigationBar from "../../components/NavigationBar";
import useGestorData from "../../components/useGestorData/userGestorData";
import Colaborador from "../../Interfaces/Colaborador";
import { useState, useEffect } from "react";
import api from "../../api";
import Graph from "../../components/Graph";
import { indiData } from "../../data/indiData";

const Colaborador = () => {
  const data = useGestorData();

  const colabId =
    typeof window !== "undefined" && window.location.search.includes("colab=") ? new URLSearchParams(window.location.search).get("colab") : 0;

    const [colabData, setcolabData] = useState<Colaborador>({ name: '', email: '', imgUrl: '', id: colabId, managerId: 0, cellphone: '', dateBirth: '', address: '' });


  useEffect(() => {
    api
      .get(`/colaborator/${colabId}`)
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
                         <Graph indicatorData={indiData}></Graph>
                        </div>
                    </div>
                
                    <div id="direita" className=" ml-11">
                        <div className=" text-right  ml-auto flex mb-4">
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
