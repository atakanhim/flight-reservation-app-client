import { DatePicker } from '@mui/x-date-pickers';
import React, { useEffect, useState } from 'react'
import { FaPlane } from "react-icons/fa";
import { FaPlaneArrival, FaPlaneDeparture, FaCalendarDay } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { FlightCardList } from './FlightCard/FlightCardList';
import FiltreMain from './Filtre/FiltreMain';


export default function HomePageMain() {

    const [selected, setSelected] = useState('roundTrip'); // Başlangıçta 'roundTrip' seçili
    //


    // dropdownMenu Use States :start
    const [departure, setDeparture] = useState('');
    const [departureInput, setDepartureInput] = useState('');
    const [arrival, setArrival] = useState('');
    const [arrivalInput, setArrivalInput] = useState('');

    const [showDropdownArrival, setShowDropdownArrival] = useState(false);
    const [showDropdownDeparture, setShowDropdownDeparture] = useState(false);
    // dropdownMenu Use States :end

    // calendar states:start
    const [flightDate, setFlightDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    // calendar states:end

    const flights = [{
        "id": 1,
        "departure": "Istanbul",
        "arrival": "Ankara",
        "flightDate": "2023-03-01",
        "returnDate": "2023-03-03",
    }];


    // Havalimanı verileri (statik JSON)
    const airportsData = [
        { id: 1, name: "Los Angeles International Airport", code: "LAX" },
        { id: 2, name: "John F. Kennedy International Airport", code: "JFK" },
        { id: 3, name: "Heathrow Airport", code: "LHR" },
        { id: 4, name: "Tokyo Haneda Airport", code: "HND" },
        { id: 5, name: "Charles de Gaulle Airport", code: "CDG" },
        { id: 6, name: "Amsterdam Schiphol International Airport", code: "AMS" }
    ];


    const departureHandle = (airportCode: string, airportName: string) => {
        setDepartureInput(`(${airportCode})${airportName}`); // Havalimanı seçildiğinde inputa yazdır
        setDeparture(airportCode); // Havalimanı seçildiğinde inputa yazdır
        setShowDropdownDeparture(false); // Dropdown kapat

        if (airportCode == arrival) {
            if (airportCode == 'AMS') {
                setArrival('')
                setArrivalInput('');
            }
            else
                setArrivalAms()
        }
        else if (airportCode != 'AMS')
            setArrivalAms()
    }
    const arrivalHandle = (airportCode: string, airportName: string) => {
        setArrivalInput(`(${airportCode}) ${airportName}`); // Havalimanı seçildiğinde inputa yazdır
        setArrival(airportCode); // Havalimanı seçildiğinde inputa yazdır
        setShowDropdownArrival(false); // Dropdown kapat

        if (airportCode == departure) {
            if (airportCode == 'AMS') {
                setDeparture('')
                setDepartureInput('');
            }
            else
                setDepartureAms()
        }
        else if (airportCode != 'AMS')
            setDepartureAms()

    }

    const setDepartureAms = () => {
        setDeparture('AMS');
        setDepartureInput('(AMS) Amsterdam Schiphol International Airport ');
    }
    const setArrivalAms = () => {
        setArrival('AMS');
        setArrivalInput('(AMS) Amsterdam Schiphol International Airport ');
    }
    const buttonsAndTextRender = () => {
        return <>
            <div className='flex flex-row justify-between items-center p-3 '>
                <div className='flex gap-3 justify-center items-center '>
                    <FaPlane className='ml-1' />
                    <h3>BOOK YOUR FLIGHT</h3>
                </div>
                <div className='flex flex-row'>
                    <div className="flex border-2 border-purple-500 rounded-full overflow-hidden">
                        <button
                            onClick={() => setSelected('roundTrip')}
                            className={`px-4 py-2 ${selected === 'roundTrip' ? 'bg-purple-800 text-white' : 'bg-white text-purple-500'
                                }`}
                        >
                            Round trip
                        </button>
                        <button
                            onClick={() => setSelected('oneWay')}
                            className={`px-4 py-2 ${selected === 'oneWay' ? 'bg-purple-800 text-white' : 'bg-white text-purple-500'
                                }`}
                        >
                            One way
                        </button>
                    </div>
                </div>
            </div>

        </>
    };


    const inputsAndCalendarRender = () => {
        return <>
            <div className='flex flex-row flex-wrap justify-between  items-center '>
                <div className='flex  justify-center items-center '>
                    {renderInputWithProps(true)}
                    {renderInputWithProps(false)}
                </div>
                <div className='flex flex-row  '>

                    {renderCalendar(true)}
                    {selected == "roundTrip" && renderCalendar(false)}
                </div>

            </div>

        </>
    };
    const renderInputWithProps = (roundedLeft: boolean) => { // rounded left ise Departure dır
        return <>
            <div className='flex flex-row justify-between items-center ml-1 '>
                <div className='flex  justify-center items-center '>
                    <div className={`p-3 border  border-r-0 h-10 ${roundedLeft ? "rounded-l-full " : ""} ${(roundedLeft ? showDropdownDeparture : showDropdownArrival) ? "border-purple-400" : "border-gray-300"}  `}>
                        {roundedLeft ? <FaPlaneDeparture /> : <FaPlaneArrival />}

                    </div>
                    <div className="relative">
                        {/* Input ve button */}
                        <div className={`flex items-center border h-10 min-w-56 ${roundedLeft ? " " : "rounded-r-full"}  ${(roundedLeft ? showDropdownDeparture : showDropdownArrival) ? "border-purple-400" : "border-gray-300"} border-l-0 px-3 py-2`}>
                            <input
                                type="text"
                                value={roundedLeft ? departureInput : arrivalInput}
                                placeholder="Havalimanı ara..."
                                className=" text-sm flex-grow text-gray-700"
                                onChange={() => { }}
                                onFocus={() => {
                                    roundedLeft ? setShowDropdownDeparture(true) : setShowDropdownArrival(true);
                                }} // Input'a odaklanıldığında dropdown açılır
                            />

                        </div>

                        {/* Dropdown menüsü */}
                        {(roundedLeft ? showDropdownDeparture : showDropdownArrival) && (
                            <ul key={roundedLeft ? 1232 : 4562} className="absolute bg-white  border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto z-10">
                                {airportsData.map((airport) => (
                                    <li
                                        key={roundedLeft ? airport.id : airport.id + 999}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            if (roundedLeft) {
                                                departureHandle(airport.code, airport.name)

                                            }
                                            else {
                                                arrivalHandle(airport.code, airport.name)
                                            }
                                        }}
                                    >
                                        {airport.name} ({airport.code})
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='flex flex-row'>



                </div>
            </div>

        </>
    };
    const renderCalendar = (isDeparture: boolean) => {
        return <>
            <DatePicker
                label={isDeparture ? "Departure date" : "Return date"}
                minDate={dayjs()}
                value={isDeparture ? flightDate : returnDate}
                onChange={(date) => isDeparture ? setFlightDate(date) : setReturnDate(date)}
                slots={{
                    textField: (params) => (
                        <TextField
                            {...params}
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderRadius: isDeparture ? '9999px 0 0 9999px' : ' 0 9999px  9999px 0 ', // Right side fully rounded
                                    height: 40,
                                    width: 250,
                                },
                                '& .MuiOutlinedInput-root': {
                                    fontSize: 12,
                                    margin: '1px',

                                    '&:hover fieldset': {
                                        borderColor: 'purple', // Hover border color
                                    },
                                },
                                '& .MuiSvgIcon-root': {
                                    transition: 'all 0.3s',
                                    color: '#6d28d9', // Icon color 
                                },
                            }}
                        />
                    ),
                }}
            />

        </>
    }

    return (
        <>
            <div className='bg-white min-h-36 min-w-[600px] rounded-3xl'>
                {buttonsAndTextRender()}
                {inputsAndCalendarRender()}
                <div className=' w-full  px-2 py-4'>
                    <button className='border rounded-2xl bg-purple-900 px-4 py-2 text-white'>Show Flights</button>
                </div>
            </div>
            <div className=' flex flex-row justify-between  w-full min-h-[70%] pt-4'>
                <div className=' w-full xl:col-span-8 '>
                    <div className='flex justify-center items-center'>
                        <FlightCardList />
                    </div>
                </div>
                <div className=' w-[230px] hidden xl:block  ml-2  '>
                    <div className='flex justify-center items-center'>
                        <FiltreMain />
                    </div>
                </div>
            </div>

        </>
    )
}
