import { FlightData } from '../../../types/flight';
import FlightCard from './FlightCard';

interface FlightCardListProps {
    flightDatas: FlightData[];
}

export const FlightCardList = ({ flightDatas }: FlightCardListProps) => {
    return (
        <div className='flex flex-col w-full gap-10'>
            {flightDatas && flightDatas.map((flight, index) => (
                <FlightCard key={index} flightData={flight} />
            ))}
        </div>
    );
};
