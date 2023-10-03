import { useState, useEffect } from "react";
import Gestor from "../../Interfaces/Gestor";
import api from "../../api";

function useGestorData() {
  const [data, setData] = useState<Gestor>({ name: "", password: "", email: "", imgUrl: "", id: 0 });

  const idGestor =
    typeof window !== "undefined" && window.location.search.includes("id=") ? new URLSearchParams(window.location.search).get("id") : 0;

  useEffect(() => {
    api
      .get("/user/", {
        params: {
          userId: idGestor,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [idGestor]);

  return data;
}

export default useGestorData;
