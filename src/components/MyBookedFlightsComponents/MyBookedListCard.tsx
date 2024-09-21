import React from 'react'
import MyBookCustomCard from './MyBookCustomCard'
import AirlineLogoRender from '../Common/AirlineLogoRender';
import CustomDropDown from '../Common/CustomDropDown';

interface BookedListCardProps {
    airlineCode?: string;
    departure?: string;
    arrival?: string;
    flightNumber?: string;
    date?: string;
    time?: string;
}

const MyBookedListCard: React.FC<BookedListCardProps> = ({

}) => {

    return (
        <div className='w-full flex flex-col lg:flex-row justify-between  items-center bg-white p-3 rounded-xl'>
            <div className='flex w-full gap-1 flex-col'>
                <div className='flex flex-row gap-3'>
                    <div>
                        <AirlineLogoRender airlineCode={"THY"} />
                    </div>
                    <p className='text-2xl font-light'>
                        7:40 AM - 9:12 AM
                    </p>
                </div>
                <div className='flex flex-row w-full   justify-between items-center'>
                    <div className='  flex flex-col'>
                        <div className='ml-12'>
                            <p>Delta Airlines</p>
                            <CustomDropDown border='ml-0' inlineDropDownMenu='top-10' text='Flight Details' textStyle='text-blue-500' />
                        </div>




                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold'>
                            Nonstop
                        </div>
                        <div className='font-light'>
                            1h 22m
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-semibold'>
                            SFO to LAX
                        </div>
                        <div className='font-light'>
                            WN 2234
                        </div>
                    </div>
                </div>
            </div>



            <div className='flex  justify-start   lg:justify-end  items-center flex-row w-full gap-3 ml-1 py-3 '>

                <MyBookCustomCard price={154} text='Main' />
                <MyBookCustomCard price={204} text='Comfort+' />
                <MyBookCustomCard />
                <MyBookCustomCard price={386} text='Delta One' />
                <MyBookCustomCard />
            </div>
        </div>
    )
}

export default MyBookedListCard
