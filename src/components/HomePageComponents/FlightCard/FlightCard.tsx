import { FC, useEffect, useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa6";
import { FlightData } from '../../../types/flight';
import { calculateTimeDifference } from '../../../utils/calculateDateTime';
import { addFlightReservationDB } from '../../../api/api';
import Swal from 'sweetalert2'


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

        setFlightDuration(calculateTimeDifference(flightData.scheduleDateTime, flightData.estimatedLandingTime));



    }, [])
    const handleBookFlight = async (flightData: FlightData) => {
        const today = new Date();
        const flightDate = new Date(flightData.scheduleDate); // Uçuş tarihini alıyoruz

        // Eğer uçuş tarihi bugünden önceyse, rezervasyon yapılmasını engelle
        if (flightDate < today) {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Uçuş tarihi geçmiş. Rezervasyon yapılamaz.",
                showConfirmButton: false,
                timer: 1500
            });
            return; // Fonksiyondan çıkıyoruz
        }

        try {
            await addFlightReservationDB(flightData);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Uçuşunuz kaydedildi",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Uçuşunuz kaydedilmedi",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

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
                    <p>{flightData.prefixIATA} - {flightData.flightNumber}</p>
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
                <button onClick={() => handleBookFlight(flightData)} className='absolute bottom-0 right-0 bg-purple-900 rounded-tl-xl rounded-br-xl text-white justify-center items-center px-6 py-3'>
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
