import g23 from '../../assets/Group 23.png'
import g24 from '../../assets/Group 24.png'
interface addInterface {
    txt: string
}

const Add = (props: addInterface) => {
    const txt = props.txt
    return (
    <div>
        <div className="flex justify-center items-center h-auto m-10">
        <div className='relative'>
            <img src={g23} alt="" className='absolute inset-0 m-auto' />
            <img src={g24} alt="" className='object-cover'/>
        </div> 
    </div>
        <div className="flex justify-center items-center h-auto m-10">
            <div>
                <p>
                    {txt}
                </p>
                <div className="flex justify-center items-center h-auto ">
                     <button className='bg-red-600 text-center p-1 pr-6 pl-6 borde-1 m-2 border-gray-300 rounded-md text-white'>Menu</button>
                </div>
               
            </div>
        </div>  
    </div>
        
    )
};
export default Add;