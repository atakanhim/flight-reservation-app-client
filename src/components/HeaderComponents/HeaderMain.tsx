import { FaPlane, FaTag, FaTicketAlt } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa6'
import rrimage from '../../assets/rrprofile.jpeg'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='flex flex-row justify-between items-center   p-3'>
            <div className='flex-row flex  justify-center items-center gap-2'>
                <a href="./"><FaPlane color='white' className='bg-purple-950 rounded-full
                 text-4xl' /></a>
                <Link to="/">Hakkında Sayfası</Link>
            </div>
            <div className='flex-row flex  justify-center items-center gap-2'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <FaTicketAlt color="rgb(88 28 135)" />
                    <Link to='/MyBookedFlights' className=' cursor-pointer transition-all duration-200 border-b-2 hover:border-purple-950 '>My Booked Flights</Link>

                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <FaTag color="rgb(88 28 135)" />
                    <Link to='' className=' cursor-pointer transition-all duration-200 border-b-2 hover:border-purple-950 '>Deals</Link>

                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <FaGlobe color="rgb(88 28 135)" />
                    <Link to='' className=' cursor-pointer transition-all duration-200 border-b-2 hover:border-purple-950 '>Discover</Link>

                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <img src={rrimage} width={50} height={50} className='rounded-full border-2 transition-all duration-500 hover:border-purple-900  ' />
                    <Link to='' className=' cursor-pointer transition-all duration-200 border-b-2 hover:border-purple-950 '>Raymond Reddington</Link>
                </div>
            </div>
        </div >
    )
}
