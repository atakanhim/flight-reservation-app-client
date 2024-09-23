import { useEffect, useState } from 'react';
import MyBookedListCard from './MyBookedListCard'
import { FlightData } from '../../types/flight';
import { getFlightReservationsFromDB } from '../../api/api';

const MyBookedList = () => {
    const [myBookedCards, setMyBookedCards] = useState<FlightData[]>([])

    useEffect(() => {

        fetchData(); // Async fonksiyonu çağırıyoruz
    }, []);

    const fetchData = async () => {
        setMyBookedCards([]); // Veriyi çekmeden önce state'i temizliyoruz

        try {
            const data = await getFlightReservationsFromDB(); // API'den veri çekiyoruz
            setMyBookedCards(data); // Gelen veriyi state'e kaydediyoruz
            console.log(data);
        } catch (error) {
            console.error("Error fetching flight reservations:", error); // Hata varsa loglayın
        }
    };



    return (
        <div className='flex gap-3 flex-col'>
            {myBookedCards && myBookedCards.map((flight, index) => (
                <MyBookedListCard fetchData={fetchData} key={index} flightData={flight} />
            ))}
        </div>
    )
}

export default MyBookedList
