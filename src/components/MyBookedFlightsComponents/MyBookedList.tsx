import React from 'react'
import MyBookedListCard from './MyBookedListCard'

const MyBookedList = () => {
    return (
        <div className='flex gap-3 flex-col'>
            <MyBookedListCard />
            <MyBookedListCard />
            <MyBookedListCard />

        </div>
    )
}

export default MyBookedList
