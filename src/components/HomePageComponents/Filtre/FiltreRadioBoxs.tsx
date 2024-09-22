import React, { useState } from 'react'
import CustomRadioGroup from '../../Common/CustomRadioGroup';
import { RadioItems } from '../../../types/interfaces';

export default function FiltreRadioBoxs() {
    const [arrivalTime, setArrivalTime] = useState<string>('morning');
    const [stops, setStops] = useState<string>('nonstop');// yada 1 stop yada 2+stop
    const [airlineIncluded, setAirlineIncluded] = useState<string>('Alitalia');// Air france,Air italy gibi

    const handleChangeArrival = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArrivalTime((event.target as HTMLInputElement).value);
    };
    const handleChangeStop = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStops((event.target as HTMLInputElement).value);
    };
    const handleChangeAirline = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAirlineIncluded((event.target as HTMLInputElement).value);
    };
    // Arrival Time Radio Items
    const arrivalTimeRadioItems: RadioItems[] = [
        { id: 1, value: 'morning', label: '5:00 AM - 11:59 AM' },
        { id: 2, value: 'afternoon', label: '12:00 PM - 5:59 PM' },
    ];

    // Stops Radio Items with Prices
    const stopRadioItems: RadioItems[] = [
        { id: 1, value: 'nonstop', label: 'Nonstop', price: 230 },
        { id: 2, value: '1stop', label: '1 Stop', price: 230 },
        { id: 3, value: '2plusstops', label: '2+ Stops', price: 230 },
    ];

    // Airlines Included Radio Items with Prices
    const airlineIncludedRadioItems: RadioItems[] = [
        { id: 1, value: 'alitalia', label: 'Alitalia', price: 230 },
        { id: 2, value: 'lufthansa', label: 'Lufthansa', price: 230 },
        { id: 3, value: 'airfrance', label: 'Air France', price: 230 },
        { id: 4, value: 'brusselsairlines', label: 'Brussels Airlines', price: 230 },
        { id: 5, value: 'airitaly', label: 'Air Italy', price: 230 },
        { id: 6, value: 'siberia', label: 'Siberia', price: 230 },
    ];

    return (
        <div className='flex flex-col gap-1  mt-3'>
            <CustomRadioGroup key={1} onChange={handleChangeArrival} radioItems={arrivalTimeRadioItems} onChangeValue={arrivalTime} title="Arrival Time" />
            <CustomRadioGroup key={2} onChange={handleChangeStop} radioItems={stopRadioItems} onChangeValue={stops} title="Stops" />
            <CustomRadioGroup key={3} onChange={handleChangeAirline} radioItems={airlineIncludedRadioItems} onChangeValue={airlineIncluded} title="Airlines Incuded" />
        </div>
    )
}
