import { useState } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const Login = () => {
  const navigate = useNavigate();
  const [email, emailUpdate] = useState("");
  const [password, passwordUpdate] = useState("");
  const [message, messageUpdate] = useState("");

  const proceedLogin = async (e: { preventDefault: () => void }) => {
    if (validate())
      try {
        e.preventDefault();
        const formData = {
          email: email,
          password: password,
        };

        const response = await api.post("/auth/sign-in", formData);

        if (response.status === 200) {
          console.log(response.data.user.id);
          localStorage.setItem("token", response.data.jwt);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate(`/HomePage`, { replace: true });
        } else if (response.status === 401) {
          messageUpdate("Email ou senha inválidos");
        } else {
          messageUpdate("Erro na requisição");
        }
      } catch (error) {
        console.log(error);
        messageUpdate("Email ou senha inválidos");
        console.log("Email ou senha inválidos");
      }
  };

  const validate = () => {
    let result = true;
    if (email === " ||" || email === null) {
      result = false;
      //renderToStaticMarkup.console.warn('Por favor insira um email');
    }
    if (password === " ||" || password === null) {
      result = false;
      //renderToStaticMarkup.console.warn('Por favor insira uma senha');
    }
    return result;
  };
  return (
    <div className="overflow-hidden">
      <div className={styles["login-notice"]}>
        <p>Cadastre-se agora e não pague comissão enquanto não atingir 30 pedidos por mês. Oferta por tempo limitado! *Sujeito a elegibilidade</p>
      </div>

      <div className={styles["v-foods"]}>
        <div className=" my-[28.5px] mx-[89px]">
          <img src="public/images/loginLogo.png"></img>
        </div>
      </div>

      <div className=" bg-cover bg-center h-screen bg-loginMen ">
        <div className=" flex mt-24 justify-center">
          <div className="w-[450px] h-[450px]  mx-24 text-white ">
            <p className="md:text-5xl sm:text-2xl mt-28 font-semibold">Mais de 30 milhões de parceiros cadastrados</p>
            <p className=" mt-5">Esse é o alcance das lojas parceiras do V-foods.</p>
            <p>Faça parte e alavanque suas vendas</p>
          </div>

          <div className=" bg-white rounded-2xl w-[430px] h-[480px] mx-24 p-6">
            <p className="md:text-3xl sm:text-2xl font-bold mt-5">Entrar como Gestor</p>
            <p className=" text-stone-700">Gerencie sua loja de forma fácil e rápida</p>
            <form className="mt-8" onSubmit={proceedLogin} method="POST">
              <div className="mb-8">
                <label htmlFor="email" className="block">
                  E-mail:
                </label>
                <input
                  value={email}
                  onChange={(e) => emailUpdate(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className=" text-xs text-red-800">{message}</p>
              </div>

              <div className="mb-8">
                <label htmlFor="senha">Senha:</label>
                <input
                  value={password}
                  onChange={(e) => passwordUpdate(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  type="password"
                  id="senha"
                  name="senha"
                  required
                />
                <p className="underline underline-offset-2 text-sm ml-60  mt-2 font-medium">Esqueçi minha senha</p>
              </div>
              <div className="mb-8 text-center">
                <button
                  type="submit"
                  className="bg-[#E51110] text-white px-10 py-3 rounded-xl hover:bg-red-800 focus:outline-none focus:bg-blue-600 text-lg font-semibold "
                >
                  Avançar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
