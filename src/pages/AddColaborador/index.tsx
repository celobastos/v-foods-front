import React, { useState } from "react";
import styles from "./index.module.css";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavigationBar from "../../components/NavigationBar";
import Colaborador from "../../Interfaces/Colaborador";
import Gestor from "../../Interfaces/Gestor";
import api from "../../api";

const CadastroColaborador = () => {
    const data: Gestor = JSON.parse(localStorage['user']);

  const [message, messageUpdate] = useState("");
  const [colaborador, setColaborador] = useState<Colaborador>({
    id: 0,
    managerId: data.id,
    name: '',
    address: '',
    email: '',
    imgUrl: '',
    dateBirth: '',
    cellphone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setColaborador({ ...colaborador, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    let flag = 1;
    e.preventDefault();
    await setColaborador({ ...colaborador, ['managerId']: data.id });
    console.log(colaborador);
    try {
      e.preventDefault();
      await setColaborador({ ...colaborador, ["managerId"]: data.id });

      const response = await api.post("/colaborator/create", colaborador);
      console.log(response);

      if (response.status !== 201) {
        flag = 0;
        messageUpdate("Problema ao cadastrar colaborador");
      } else {
        flag = 1;
      }

      const colab = response.data;

      if (flag === 1) {
        console.log('sucesso');
        window.open(`/Colaborador?colab=${colab.id}`, "_self");
      }
    } catch (error) {
      console.log(error);
      messageUpdate("Problema ao cadastrar colaborador");
    }
  };

  return (
    <div className="flex h-screen">
      <SideMenu></SideMenu>
      <div className="w-full bg-gray-50">
        <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
        <div className="flex items-center justify-center mt-2">
          <div className="w-full max-w-md bg-white p-11 rounded-3xl border border-gray-300 ">
            <h1 className="text-2xl font-bold mb-4">Adicionar um novo perfil</h1>
            <p className=" -mt-4 mb-8 text-gray-600">Faça o cadastro de um novo colaborador</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={colaborador.name}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                  placeholder="Nome completo"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">
                  
                </label>
                <input
                  type="text"
                  id="cellphone"
                  name="cellphone"
                  value={colaborador.cellphone}
                  onChange={handleChange}
                  required
                  className={styles['custom-input']}
                  placeholder='Telefone'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={colaborador.address}
                  onChange={handleChange}
                  required
                  className={styles['custom-input']}
                  placeholder='CEP'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={colaborador.email}
                  onChange={handleChange}
                  required
                  className={styles['custom-input']}
                  placeholder='Email'
                />
              </div>
              <p className=' text-sm text-red-700 -mt-2 mb-4 ml-2'>{message}</p>

              <div className="mb-4">
                <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700">
                  
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  onChange={handleChange}
                  required
                  className={styles['custom-input']}
                  placeholder='imagem de perfil (URL)'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="dateBirth" className="block text-sm font-medium text-gray-400">
                  Data de Nascimento:
                </label>
                <input
                  type="date"
                  id="dateBirth"
                  name="dateBirth"
                  value={colaborador.dateBirth}
                  onChange={handleChange}
                  required
                  className={styles["custom-input"]}
                />
              </div>

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

export default CadastroColaborador;
