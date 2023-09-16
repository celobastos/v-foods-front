import styles from './index.module.css';

const Login = () => {
  return (
    <div className="overflow-hidden">
        <div className={styles['login-notice']}>
            <p>
            Cadastre-se agora e não pague comissão enquanto não atingir 30 pedidos por mês. Oferta por tempo limitado! *Sujeito a elegibilidade
            </p>
        </div>
        <div className={styles['v-foods']}>
            <div className=" my-[28.5px] mx-[89px]">
                <img src='public/images/loginLogo.png'></img>
            </div>
        </div>
        <div className=' bg-cover bg-center h-screen bg-loginNot '>
        </div>
    </div>
  )
}

export default Login