import React, { useState } from "react";
import styles from "./index.module.css";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavigationBar from "../../components/NavigationBar";
import Indicador from "../../Interfaces/Indicador";
import api from "../../api";

const CadastroIndicador = () => {
    const data = JSON.parse(localStorage['user']);

  const [message, messageUpdate] = useState("");
  const [indicator, setIndicator] = useState<Indicador>({
    id: 0,
    managerId: 0,
    name: '',
    description: '',
    measurement: 'percentual'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setIndicator({ ...indicator, [name]: value });
  };

  const handleMeasurementChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const measurement = e.target.value;
    setIndicator({ ...indicator, measurement });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    let flag = 1;
    try {
      e.preventDefault();
      const response = await api.post("/indicator/create", indicator);
      console.log(response);

      if (response.status !== 201) {
        flag = 0;
        messageUpdate("Problema ao cadastrar indicador");
      } else {
        flag = 1;
      }

      //const indi = response.data;

      if (flag === 1) {
        console.log('sucesso');
        window.open(`/Gestor`, "_self");
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
          <div className="w-full max-w-md bg-white p-11 rounded-3xl border border-gray-300 ">
            <h1 className="text-2xl font-bold mb-4">Adicionar um novo indicador</h1>
            <p className=" -mt-4 mb-8 text-gray-600">Faça o cadastro de um novo indicador</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={indicator.name}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="Nome"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="measurement" className="block text-sm text-gray-500">
                  Unidade de Medida:
                </label>
                <select
                  id="measurement"
                  name="measurement"
                  value={indicator.measurement}
                  onChange={handleMeasurementChange}
                  className={styles["custom-input"]}
                >
                  <option value="numero">Número</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="percentual">Percentual</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={indicator.description}
                  onChange={handleChange}
                  required 
                  className={styles['custom-input']}
                  placeholder='Descrição'
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

export default CadastroIndicador;
