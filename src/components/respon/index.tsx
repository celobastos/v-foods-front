import styles from 'src/pages/Perfil/index.module.css';

export const respon = () => {
  return (
    <div className='bg-[#fbfbfb] min-h-screen p-4'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/3'>
          <div className={styles['profile']}>
            {/* Seu conteúdo da esquerda */}
          </div>
          <div className={styles['metas']}>
            {/* Seu conteúdo de metas */}
          </div>
        </div>
        <div className='lg:w-2/3'>
          <div className='lg:mt-0 mt-4 flex flex-col'>
            {/* Seu conteúdo da direita */}
          </div>
          <div className={styles['status']}>
            {/* Seu conteúdo de status */}
          </div>
        </div>
      </div>
      <footer className='text-right mt-8 ml-auto mr-4 flex'>
        <div className='py-2 px-4 border-2 ml-auto rounded-md border-[#d6d6d6]'>Setembro</div>
        <div className='p-2 bg-black text-white rounded-md ml-4'>Baixar PDF</div>
      </footer>
    </div>
  );
};
