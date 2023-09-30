import styles from './index.module.css';

interface UserInfoProps {
    picture: string;
    name: string;
    cargo: string;
    email: string;
}

const UserInfo = ({picture, name, cargo, email}: UserInfoProps) => {
  return (
    <div>
        <div className={styles['profile']}>
            <div className=' flex mt-[21px] '>
                <div className='absolute left-[353px]'>
                    <img src={picture} className=' w-28 h-28 rounded-full'></img>
                </div>

                <div className=' ml-44'>
                    <div className='border-b border-gray-300 pb-4'>
                        <h1 className=' text-3xl font-bold'>{name}</h1>
                        <p className=' text-gray-500 font-semibold text-sm'>{cargo}</p>
                    </div>
                    <div className=' mt-4'>
                        <p className=' font-medium flex text-sm'><img src='/images/mail.png' className=' w-[18px] h-[14px] mr-2 mt-[2px]'></img>Email</p>
                        <p className='text-gray-500 text-sm'>{email}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfo