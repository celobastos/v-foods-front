import React, { useState } from 'react';
import styles from './index.module.css';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import useGestorData from '../../components/useGestorData/userGestorData';
import Colaborador from '../../Interfaces/Colaborador';

const CadastroColaborador = () => {
  const idGestor = (typeof window !== 'undefined' && window.location.search.includes('id='))
  ? new URLSearchParams(window.location.search).get('id')
  : 0;
  const data = useGestorData();

  const [message, messageUpdate] =useState('');
  const [colaborador, setColaborador] = useState<Colaborador>({
    id: 0,
    teamId: idGestor,
    name: '',
    address: '',
    CEP: '',
    email: '',
    imgURL: '',
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
    await setColaborador({ ...colaborador, ['teamId']: data.id });
    try {
      const response = await fetch('http://localhost:3000/api/colaborator/create', {
        method: 'POST',
        body: JSON.stringify(colaborador),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (!response.ok) {
          console.log('Errou aqui ein');
          messageUpdate('Email já registrado');
          flag = 0;
        }else{
          //alert("Item cadastrado com sucesso!!");
          flag = 1;
        }
        return response.json();
        
      });
      const colab = await response;
      console.log(colab);
      //window.history.back();
      if(flag == 1){
        window.open(`/Colaborador?id=${idGestor}&colab=${colab.id}`, "_self");
      }
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex h-screen">
      <SideMenu gestorId={data.id}></SideMenu>
      <div className='w-full bg-gray-50'>
      <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
      <div className='flex items-center justify-center mt-2'>
      <div className="w-full max-w-md bg-white p-11 rounded-3xl border border-gray-300 ">
      <h1 className="text-2xl font-bold mb-4">Adicionar um novo perfil</h1>
      <p className=' -mt-4 mb-8 text-gray-600'>Faça o cadastro de um novo colaborador</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">

          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={colaborador.name}
            onChange={handleChange}
            required
            className={styles['custom-input']}
            placeholder='Nome completo'
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
            placeholder='Endereço'
          />
        </div>

        <div className="mb-4">
          <label htmlFor="CEP" className="block text-sm font-medium text-gray-700">
            
          </label>
          <input
            type="text"
            id="CEP"
            name="CEP"
            value={colaborador.CEP}
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
          <label htmlFor="imgURL" className="block text-sm font-medium text-gray-700">
            
          </label>
          <input
            type="text"
            id="imgURL"
            name="imgURL"
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
            className={styles['custom-input']}
          />
        </div>

        <div className="mt-4 text-right">
          <input
            type="submit"
            value="Criar"
            className=" bg-black text-white py-2 px-4 rounded-md hover:bg-red-700 cursor-pointer"
          />
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CadastroColaborador;

