import styles from './index.module.css';

interface UserInfoProps {
    picture: string;
    name: string;
    cargo: string;
    email: string;
    socials: string;
}

const GestorInfo = ({picture, name, cargo, email, socials}: UserInfoProps) => {
  return (
    <div>
        <div className={styles['profile']}>
            <div className=' flex'>
                <div className='absolute left-[300px]'>
                    <img src={picture} className=' w-[120px] h-[120px] rounded-full'></img>
                </div>

                <div className=' ml-40 mt-6'>
                    <div className='pb-4'>
                        <h1 className=' text-3xl font-bold'>{name}</h1>
                        <p className=' text-gray-400 font-semibold text-xl'>Gestor área X</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default GestorInfo