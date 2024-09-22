import SideBar from '../components/MyBookedFlightsComponents/SideBar'
import MainContainer from '../components/MyBookedFlightsComponents/MainContainer'

export default function MyBookedFlights() {
    return (
        <div className='flex flex-col  min-h-[770px]'>
            <SideBar />
            <MainContainer />
        </div>
    )
}
