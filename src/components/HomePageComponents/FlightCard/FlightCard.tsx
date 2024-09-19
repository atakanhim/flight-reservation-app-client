import React, { FC } from 'react'
import { IconType } from 'react-icons';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa6";

interface FlightCardProps {


}


const Card: FC<FlightCardProps> = ({ }) => {
    return (
        <div className='mb-14 w-full p-3 flex flex-col bg-white min-h-44 rounded-xl rounded-bl-none mr-2 relative'>
            <h1 className='font-bold'>Milano - Madrid</h1>
            <div className='flex mt-3  flex-row  min-h-12 justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center gap-3'><FaPlaneDeparture /><p className='font-mono'>Departure</p></div>
                    <p className='font-bold font-mono'>7:30 AM</p>
                    <p className=' font-mono'>Airport: MXP</p>
                </div>
                <div className='border w-16 border-black'></div>
                <div className='flex justify-center items-center flex-col'>
                    <p>THY</p>
                    <FaPlane color='purple' />
                    <p>2h 25m (Nonstop)</p>
                </div>
                <div className='border w-16 border-black'></div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center gap-3'><FaPlaneArrival /><p className='font-mono'>Arrival</p></div>
                    <p className='font-bold font-mono'>7:30 AM</p>
                    <p className=' font-mono'>Airport: MXP</p>
                </div>

            </div>
            <div className='mt-3 flex justify-between items-center '>
                <div>
                    <p className=' text-lg font-bold text-purple-900'>Price: $200</p>
                    <p className='text-gray-900 font-light'>Round Trip</p>
                </div>
                <button className='absolute bottom-0 right-0 bg-purple-900 rounded-tl-xl rounded-br-xl text-white justify-center items-center px-6 py-3'> Book Fight</button>
                <button className='absolute -bottom-12 left-0 bg-gray-400 rounded-b-xl  text-white justify-center items-center px-6 py-3'> Book Fight</button>
            </div>
        </div>
    )
}
export default Card;