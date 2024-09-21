import React from 'react'
import CustomDropDown from '../Common/CustomDropDown'
import { FaInfoCircle } from 'react-icons/fa'
import MyBookedList from './MyBookedList'

const MainContainer = () => {
    return (
        <div className='bg-gray-200 mt-1 flex-1 w-full p-3'>
            <div className='flex gap-2 flex-row justify-between items-center   min-h-10'>
                <div className='flex flex-row justify-center items-center'>
                    <p>Sort By:</p>
                    <CustomDropDown inlineDropDownMenu='top-8 left-2 ' text='Recommended' textStyle='text-black font-bold ' border='' />
                </div>
                <div className='flex flex-row justify-center items-center gap-1'>
                    <FaInfoCircle color='blue' /><p>Avg Fare: $225</p>
                </div>
            </div>

            <div className='flex mt-5 gap-3 flex-col'>
                <MyBookedList />
            </div>
        </div>
    )
}

export default MainContainer
