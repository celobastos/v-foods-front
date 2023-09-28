import { useState, useEffect } from 'react';
import Gestor from '../../Interfaces/Gestor';

function useGestorData() {
  const [data, setData] = useState<Gestor>({ name: '', password: '', email: '', imgUrl: '', id: 0 });

  const idGestor = (typeof window !== 'undefined' && window.location.search.includes('id='))
    ? new URLSearchParams(window.location.search).get('id')
    : 0;

  useEffect(() => {
    const ApiUrl = `http://localhost:3000/api/user/?userId=${idGestor}`;

    fetch(ApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, [idGestor]);

  return data;
}

export default useGestorData;
