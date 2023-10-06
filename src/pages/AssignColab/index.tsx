import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import Colaborador from '../../Interfaces/Colaborador';
import { useEffect, useState } from 'react';
import api from '../../api';
import ColaboradorList from '../../components/ColaboratorList';

const AssinColab = () => {

    const data = JSON.parse(localStorage['user']);
    const [colabData, setcolabData] = useState<Colaborador[]>([{ name: '', email: '', imgUrl: '', id: 0, managerId: 0, cellphone: '', dateBirth: '', address: '' }]);
    
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

    }, [colabData, data.id]);

  return (
    <div className='bg-gray-50 h-screen flex '>
            <SideMenu></SideMenu>
            <div className=' w-full'>
                <NavigationBar name={data.name} picture={data.imgUrl}></NavigationBar>
                <ColaboradorList colaboradores={colabData}></ColaboradorList>
            </div>
    </div>
  )
}

export default AssinColab