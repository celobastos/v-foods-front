import { useState, useEffect } from 'react';
function useAssignData() {
  
  const [data, setData] = useState([])
  const idGestor = (typeof window !== 'undefined' && window.location.search.includes('id='))
    ? new URLSearchParams(window.location.search).get('id')
    : 0;

  useEffect(() => {
    const ApiUrl = `http://localhost:3000/api/assign/all/manager/:managerId${0}`;

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

export default useAssignData;
