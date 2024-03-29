import React from 'react'
import styles from '../style';
import { Bronze, Silver, Oro, avatar2, avatar3, avatar4 } from "../assets";



const Ranking = () => {
  return (
    <section id="ranking" className="py-8 container mx-auto">
        <h1 className="font-monse font-bold text-balance ss:text-[52px] text-[30px] text-center text-secondary mb-8">Jugadores de la semana</h1>
        <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-4 sm:pt-20">
            <div className="bg-card w-[354px] h-[405px] rounded-xl shadow-lg flex-1 flex flex-col items-center justify-center py-4 px-5">
                <div className="flex mb-8">
                    <img src={Silver} alt='Silver' className='object-cover'/>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <img src={avatar2} alt='Silver' className='object-cover rounded-full w-[80px] h-[80px] mr-6'/>
                    <div className="info">
                        <h2 className='font-monse font-extrabold text-[20px] text-secondary'>jdoe123</h2>
                        <h3 className='font-monse font-medium text-[18px] text-paragraph'>John Doe</h3>
                    </div>
                </div>
            </div>
            <div className="sm:mt-[-138px] bg-card w-[354px] h-[405px] rounded-xl shadow-lg flex-1 flex flex-col items-center  py-4 px-5">
                <div className="flex mb-8">
                    <img src={Oro} alt='Oro' className='object-cover'/>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <img src={avatar3} alt='Silver' className='object-cover rounded-full w-[80px] h-[80px] mr-6'/>
                    <div className="info">
                        <h2 className='font-monse font-extrabold text-[20px] text-secondary'>Jans</h2>
                        <h3 className='font-monse font-medium text-[18px] text-paragraph'>Jane Smith</h3>
                    </div>
                </div>
            </div>

            <div className="bg-card w-[354px] h-[405px] rounded-xl shadow-lg flex-1 flex flex-col items-center justify-center py-4 px-5">
                <div className="flex">
                    <img src={Bronze} alt='Bronze' className='object-cover'/>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <img src={avatar4} alt='Silver' className='object-cover rounded-full w-[80px] h-[80px] mr-6'/>   
                    <div className="info">
                        <h2 className='font-monse font-extrabold text-[20px] text-secondary'>Mike05</h2>
                        <h3 className='font-monse font-medium text-[18px] text-paragraph'>Mike Johnson</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:hidden flex flex-col sm:flex-row justify-center items-center gap-4 sm:pt-36">
            
            <div className="bg-card w-[290px] xs:w-[354px] h-[405px] rounded-xl shadow-lg flex-1 flex flex-col items-center  py-4 px-5">
                <div className="flex mb-8">
                    <img src={Oro} alt='Oro' className='object-cover w-[150px]'/>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <img src={avatar2} alt='Silver' className='object-cover rounded-full w-[70px] h-[70px] mr-6'/>
                    <div className="info">
                        <h2 className='font-monse font-extrabold text-[20px] text-secondary'>Jans</h2>
                        <h3 className='font-monse font-medium text-[18px] text-paragraph'>Jane Smith</h3>
                    </div>
                </div>
            </div>

            <div className="bg-card w-[290px] xs:w-[354px] h-[405px] rounded-xl shadow-lg flex-1 flex flex-col items-center justify-center py-4 px-5">
                <div className="flex mb-8">
                    <img src={Silver} alt='Silver' className='object-cover w-[140px]'/>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <img src={avatar3} alt='Silver' className='object-cover rounded-full w-[70px] h-[70px] mr-6'/>
                    <div className="info">
                        <h2 className='font-monse font-extrabold text-[20px] text-secondary'>jdoe123</h2>
                        <h3 className='font-monse font-medium text-[18px] text-paragraph'>John Doe</h3>
                    </div>
                </div>
            </div>

            <div className="bg-card w-[290px] xs:w-[354px] h-[405px] rounded-xl shadow-lg flex-1 flex flex-col items-center justify-center py-4 px-5">
                <div className="flex">
                    <img src={Bronze} alt='Bronze' className='object-cover w-[180px]'/>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    <img src={avatar4} alt='Silver' className='object-cover rounded-full w-[70px] h-[70px] mr-6'/>   
                    <div className="info">
                        <h2 className='font-monse font-extrabold text-[20px] text-secondary'>Mike05</h2>
                        <h3 className='font-monse font-medium text-[18px] text-paragraph'>Mike Johnson</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ranking