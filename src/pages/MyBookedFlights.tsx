import React from 'react'
import SideBar from '../components/MyBookedFlightsComponents/SideBar'
import MainContainer from '../components/MyBookedFlightsComponents/MainContainer'

export default function MyBookedFlights() {
    return (
        <div className='flex flex-col mt-3 min-h-[1000px]'>
            <SideBar />
            <MainContainer />
        </div>
    )
}
