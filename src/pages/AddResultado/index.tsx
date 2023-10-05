import React, { useState } from "react";
import styles from "./index.module.css";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavigationBar from "../../components/NavigationBar";
import api from "../../api";
import UpdateAssign from "../../Interfaces/UpdateAssign";
import IndicatorData from "../../Interfaces/indiData";

const CadastroResultado = () => {
  const data = JSON.parse(localStorage['user']);
  const assignData: IndicatorData = JSON.parse(localStorage['assign']);
  console.log(assignData);

  const [message, messageUpdate] = useState("");
  const [indicator, setIndicator] = useState<UpdateAssign>({
    where: {
      month: assignData.month,
      year: assignData.year,
      colaboratorId: assignData.colaboratorId,
      indicatorId: assignData.indicatorId,
    },
    changes: {
          meta: assignData.meta,
          superMeta: assignData.superMeta,
          challenge: assignData.challenge,
          weight: assignData.weight,
          result: assignData.result
      },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIndicator((prevIndicator) => ({
      ...prevIndicator,
      changes: {
        ...prevIndicator.changes,
        [name]: value,
      },
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await api.patch("/assign/update", indicator);
      console.log(response);

      if (response.status !== 200) {
        messageUpdate("Problema ao cadastrar indicador");
      } else {
        console.log('sucesso');
        window.open(`/Colaborador/?colab=${assignData.colaboratorId}`, "_self");
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
            <h1 className="text-2xl font-bold mb-4">Adicionar resultado</h1>
            <p className=" -mt-4 mb-8 text-gray-600">Adicione ou modifique o resultado do seu colaborador para esse indicador</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">

              <div className="mb-4">
                <label htmlFor="meta" className="block text-sm font-medium text-gray-700">Meta</label>
                <input
                  type="number"
                  id="meta"
                  name="meta"
                  value={indicator.changes.meta}
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
                  value={indicator.changes.superMeta}
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
                  value={indicator.changes.challenge}
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
                  value={indicator.changes.weight}
                  onChange={handleChange}
                  required 
                  className={styles['custom-input']}
                  placeholder='Peso'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="result" className="block text-sm font-medium text-gray-700">
                Resultado
                </label>
                <input
                  type="number"
                  id="result"
                  name="result"
                  value={indicator.changes.result}
                  onChange={handleChange}
                  required 
                  className={styles['custom-input']}
                  placeholder='Resultado'
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
  );
};

export default CadastroResultado;
