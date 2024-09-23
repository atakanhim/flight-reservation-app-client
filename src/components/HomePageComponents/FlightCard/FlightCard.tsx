import { FC, useEffect, useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa6";
import { FlightData } from '../../../types/flight';
import { calculateTimeDifference } from '../../../utils/calculateDateTime';
import moment from 'moment'
interface FlightCardProps {
    flightData: FlightData;
}

const Card: FC<FlightCardProps> = ({ flightData }) => {
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [flightDuration, setFlightDuration] = useState<null | string>(null)
    useEffect(() => {
        if (flightData.flightDirection == 'D') {
            setDestination(flightData.route.destinations[0]);
            setOrigin("AMS")
        }
        else {
            setOrigin(flightData.route.destinations[0]);
            setDestination("AMS")
        }
        // Tarihleri Date objesine çevir

        const dateStart = moment.utc(flightData.scheduleDateTime).utcOffset(2);
        const dateEnd = moment.utc(flightData.estimatedLandingTime).utcOffset(2);

        const duration = moment.duration(dateEnd.diff(dateStart));
        let hours = Math.floor(duration.asHours());
        let minutes = duration.minutes();
        let seconds = duration.seconds();

        console.log(duration);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        console.log("seconds----------------------------");
        if (hours < 0)
            hours *= -1;
        if (minutes < 0)
            minutes *= -1;
        if (seconds < 0)
            seconds *= -1;
        setFlightDuration(`${hours > 0 ? hours + 'h-' : ''}${minutes > 0 ? minutes + 'm-' : ''}${seconds > 0 ? seconds + 's' : ''}`)



    }, [])
    return (
        <div className='mb-14 w-full p-3 flex flex-col bg-white min-h-44 rounded-xl rounded-bl-none mr-2 relative'>
            <h1 className='font-bold'>{origin} - {destination}</h1>
            <div className='flex mt-3 flex-row min-h-12 justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <FaPlaneDeparture />
                        <p className='font-mono'>Departure</p>
                    </div>
                    <p className='font-bold font-mono'>{new Date(flightData.scheduleDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p className='font-mono'>Airport: {origin}</p>
                </div>
                <div className='border w-16 border-black'></div>
                <div className='flex justify-center items-center flex-col'>
                    <p>{flightData.prefixIATA}</p>
                    <FaPlane color='purple' />
                    <p>{flightData.publicFlightState.flightStates.join(', ')}</p>
                    <p className='text-gray-500 text-sm mt-3'>{flightDuration ?? ""}</p>
                </div>
                <div className='border w-16 border-black'></div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <FaPlaneArrival />
                        <p className='font-mono'>Arrival</p>
                    </div>
                    <p className='font-bold font-mono'>{new Date(flightData.estimatedLandingTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p className='font-mono'>Airport: {destination}</p>
                </div>
            </div>
            <div className='mt-3 flex justify-between items-center'>
                <div>
                    <p className='text-lg font-bold text-purple-900'>Price: ${200}</p>
                    <p className='text-gray-900 font-light'>Round Trip</p>
                </div>
                <button className='absolute bottom-0 right-0 bg-purple-900 rounded-tl-xl rounded-br-xl text-white justify-center items-center px-6 py-3'>
                    Book Flight
                </button>
                <button className='absolute -bottom-10 left-0 bg-gray-300 rounded-b-lg text-purple-900 hover:text-gray-300 hover:bg-purple-900 transition-all duration-300 justify-center items-center px-8 py-2 underline font-semibold'>
                    Check The Details
                </button>
            </div>
        </div>
    );
}

export default Card;
