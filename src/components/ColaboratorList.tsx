import { Link } from "react-router-dom";
import Colaborador from "../Interfaces/Colaborador";

interface ColaboradorListProps {
    colaboradores: Colaborador[];
  }

const ColaboradorList = ({colaboradores}: ColaboradorListProps) => {

  return (
    <div className="bg-white p-11 rounded-3xl border border-gray-300 w-fit mx-auto">
      <h2 className="text-2xl font-bold mb-4">Atribuir ao colaborador</h2>
      <div className="max-h-[500px] overflow-y-auto">
      <table className="min-w-full mx-auto"> {/* Adicione a classe mx-auto para centralizar horizontalmente */}
        <thead>
          <tr className="">
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left text-gray-700">Cod</th>
            <th className="py-2 px-4 text-left text-gray-700">Nome</th>
            <th className="py-2 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id} className="border-b hover:bg-blue-50 ">
                
              <td><img className='w-[70px] h-[70px] rounded-full my-2 mr-11' src={colaborador.imgUrl} alt={colaborador.name} /></td>
              <td className="py-2 px-4 mr-11 text-gray-700">{colaborador.id}</td>
              <td className="py-2 px-4 mr-11 text-gray-700">{colaborador.name}</td>
              <td className="py-2 px-4 mr-11 text-gray-700"><Link to={`/AddAssign?colab=${colaborador.id}`}><div className=" border-[2px] border-[#5EE0F1] w-8 h-8 rounded-lg hover:bg-[#5EE0F1]" ></div></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ColaboradorList;
