import React, { useEffect, useState } from 'react'
import MyBookCustomCard from './MyBookCustomCard'
import AirlineLogoRender from '../Common/AirlineLogoRender';
import CustomDropDown from '../Common/CustomDropDown';
import { FlightData } from '../../types/flight';
import { calculateTimeDifference } from '../../utils/calculateDateTime';
import { FaTrash } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { deleteFlightReservationFromDB } from '../../api/api';
import { formatDateString } from '../../utils/formatDateString';

interface BookedListCardProps {
    flightData: FlightData;
    fetchData: () => Promise<void>; // fetchData fonksiyonunun tipi
}

const MyBookedListCard: React.FC<BookedListCardProps> = ({
    flightData,
    fetchData
}) => {
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [flightDuration, setFlightDuration] = useState<null | string>(null)
    const [flightTime, setFlightTime] = useState<{
        scheduleDateTime:
        { time: string, date: string }
        ;
        estimatedLandingTime:
        { time: string, date: string }
        ;
    }>()
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

        let dataSchedule = formatDateString(flightData.scheduleDateTime);
        let dataEstimated = formatDateString(flightData.estimatedLandingTime);
        setFlightTime({
            scheduleDateTime: { time: dataSchedule[0], date: dataSchedule[1] },
            estimatedLandingTime: { time: dataEstimated[0], date: dataEstimated[1] }
        });
    }, [])

    const handleDeleteFlight = async (id: string) => {

        try {
            let data = await deleteFlightReservationFromDB(id);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            });
            await fetchData();
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Uçuşunuz Silinemedi",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    // FlightData'dan verileri çekiyoruz
    const {
        flightNumber,
        flightName,
        prefixIATA,
        _id
    } = flightData;

    return (
        <div className='relative w-full flex flex-col lg:flex-row justify-between  items-center bg-white p-3 rounded-xl pr-[50px]'>
            <div className='flex w-full gap-1 flex-col'>
                <div className='flex flex-row gap-3'>
                    <div>
                        {/* AirlineLogoRender bileşenine airlineCode gönderiyoruz */}
                        <AirlineLogoRender airlineCode={"THY"} />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xs sm:text-xl font-light'>
                            {flightTime && flightTime.scheduleDateTime.time} -{flightTime && flightTime.estimatedLandingTime.time}
                        </p>
                        <p className='text-[10px] sm:text-xs font-extralight'>
                            {flightTime && flightTime.scheduleDateTime.date} -{flightTime && flightTime.estimatedLandingTime.date}
                        </p>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='flex flex-col'>
                        <div className='xm:ml-12'>
                            {/* Havayolu ismi dinamik olarak */}
                            <p>{flightName}</p>
                            <CustomDropDown border='ml-0 sm:z-30' inlineDropDownMenu='top-5 ' text='Flight Details' textStyle='text-blue-500' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold'>
                            {/* Uçuş süresi dinamik olarak */}
                            Nonstop
                        </div>
                        <div className='font-light'>
                            {/* Örnek süre, flightData'dan çekilecek */}
                            {flightDuration}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold'>
                            {/* Kalkış ve varış noktaları dinamik olarak */}
                            {origin} to {destination}
                        </div>
                        <div className='font-light'>
                            {/* Uçuş numarası dinamik olarak */}
                            {prefixIATA} {flightNumber}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-start lg:justify-end items-center flex-row w-full gap-3 ml-1 py-3'>
                {/* Fiyat ve hizmet sınıflarını flightData'dan alabilirsiniz */}
                <MyBookCustomCard price={154} text='Main' />
                <MyBookCustomCard price={204} text='Comfort+' />
                <MyBookCustomCard />
                <MyBookCustomCard price={386} text='Delta One' />
                <MyBookCustomCard />
            </div>

            <button onClick={() => handleDeleteFlight(_id)} className='absolute top-2 right-2 px-2 rounded-full '>
                <FaTrash color='red' />
            </button>
        </div>
    )
}

export default MyBookedListCard;
