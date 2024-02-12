import styles from '../style';
import { asterisco, trophy, arrow } from '../assets';
import { Link } from "react-router-dom"

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
        <div className='flex flex-row items-center py-[6px] pl-4'>
            <img src={asterisco} alt="icono" className='w-[20px] h-[20px]' />
            <p className={`${styles.paragraph} ml-2`}>
                <span className='text-purple'>Demuestra tu destreza</span>
            </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full sm:w-[900px]">
            <h1 className='flex-1 font-monse font-bold ss:text-[72px] text-[52px] text-purple ss:leading-[100px] leading-[75px]'>
                ArenaMobile<br className='sm:block hidden' /> {" "} 
                <span className='text-secondary font-semibold'>¡El escenario donde los campeones se coronan!</span>
            </h1>  
        </div>
        <p className={`${styles.paragraph} mt-5 text-pretty`}>
            Demuestra tus habilidades, perfecciona tu estrategia y compite contra los mejores jugadores. 
            Únete a nosotros y conviértete en un verdadero campeón.<br/> 
            <br/> ¡Desafía tus límites y domina el escenario de ArenaMobile!
        </p>
        <Link to="/register">
            <button type='button'           
                    className={`py-4 px-6 mt-4 bg-gray-gradient flex-1 flex gap-2 flex-row font-monse font-medium text-[16px]
                    text-white hover:text-secondary outline-none rounded-[14px] shadow-2xl`}> 
                Registrate <img src={arrow}/>
            </button>
        </Link>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={trophy} alt="Trophy" className='w-[400px] sm:w-[600px] relative z-[1]'/>
      </div>
    </section>
  )

export default Hero