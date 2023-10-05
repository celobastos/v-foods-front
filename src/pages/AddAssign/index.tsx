import React, { useState } from "react";
import styles from "./index.module.css";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavigationBar from "../../components/NavigationBar";
import api from "../../api";
import IndicatorData from "../../Interfaces/indiData";
import Colaborador from "../../Interfaces/Colaborador";

const CadastroAssign = () => {
  const data = JSON.parse(localStorage['user']);
  //const assignData: IndicatorData = JSON.parse(localStorage['assign']);
  //console.log(assignData);
  let colabData: Colaborador = JSON.parse(localStorage['colabData']);
  if(!colabData){
    colabData = {name: '', email: '', imgUrl: '', id: 0, managerId: 0, cellphone: '', dateBirth: '', address: ''};
  }

  const [message, messageUpdate] = useState("");
  const [indicator, setIndicator] = useState<IndicatorData>({
    colaboratorId: colabData.id,
    indicatorId: 0,
    month: 0,
    year: 0,
    weight: 0,
    meta: 0,
    superMeta: 0,
    challenge: 0,
    result: 0,
    resultDate: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIndicator((prevIndicator) => ({
      ...prevIndicator, [name]: value 
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await api.post("/assign/create", indicator);
      console.log(response);

      if (response.status !== 201) {
        messageUpdate("Problema ao atribuir indicador");
      } else {
        console.log('sucesso');
        //Lembrar de adicionar no localStorage
        window.open(`/Colaborador/?colab=${indicator.colaboratorId}`, "_self");
      }
    } catch (error) {
      console.log(error);
      messageUpdate("Problema ao cadastrar indicador");
    }
  };

  return (
    <div className="flex h-screen">
      <SideMenu></SideMenu>
      <div className="w-full bg-gray-50">
        <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
        <div className="flex items-center justify-center mt-2">
          <div className="w-full max-w-md bg-white p-11 pb-4 rounded-3xl border border-gray-300 ">
            <h1 className="text-2xl font-bold mb-4">Atribuir indicador</h1>
            <p className=" -mt-4 mb-8 text-gray-600">Atribua um indicador para um de seus colaboradores</p>
            <div className="max-h-[400px] overflow-y-auto">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">


              <div className="mb-4">
                <label htmlFor="indicatorId" className="block text-sm font-medium text-gray-700">
                  Id do indicador
                </label>
                <input
                  type="number"
                  id="indicatorId"
                  name="indicatorId"
                  value={indicator.indicatorId}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="indicatorId"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="colaboratorId" className="block text-sm font-medium text-gray-700">
                  Id do colaborador
                </label>
                <input
                  type="number"
                  id="colaboratorId"
                  name="colaboratorId"
                  value={indicator.colaboratorId}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="colaboratorId"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                  Mês
                </label>
                <input
                  type="number"
                  id="month"
                  name="month"
                  value={indicator.month}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="month"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Ano
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={indicator.year}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="year"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="meta" className="block text-sm font-medium text-gray-700">
                  Meta
                </label>
                <input
                  type="number"
                  id="meta"
                  name="meta"
                  value={indicator.meta}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="Meta"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="superMeta" className="block text-sm font-medium text-gray-700">
                Super Meta
                </label>
                <input
                  type="number"
                  id="superMeta"
                  name="superMeta"
                  value={indicator.superMeta}
                  onChange={handleChange}
                  required 
                  className={styles['custom-input']}
                  placeholder='Super Meta'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700">
                Desafio
                </label>
                <input
                  type="number"
                  id="challenge"
                  name="challenge"
                  value={indicator.challenge}
                  onChange={handleChange}
                  required 
                  className={styles['custom-input']}
                  placeholder='Desafio'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Peso
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={indicator.weight}
                  onChange={handleChange}
                  required 
                  className={styles['custom-input']}
                  placeholder='Peso'
                />
              </div>

              <p className=' text-sm text-red-700 -mt-2 mb-4 ml-2'>{message}</p>
              <div className="mt-4 text-right">
                <input type="submit" value="Criar" className=" bg-black text-white py-2 px-4 rounded-md hover:bg-red-700 cursor-pointer" />
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroAssign;
