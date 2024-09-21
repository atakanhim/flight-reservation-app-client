import React from 'react'

const MyBookCustomCard = ({ price, text }: { price?: number, text?: string } = {}) => {
    return (

        <div className={`border flex flex-col justify-center items-center border-gray-300 rounded-xl gap-4 ${!text && !price && 'bg-gray-100'}   h-24 w-16`}>
            {price && text && <>  <p className='font-bold text-2xl'>${price}</p>
                <p className='font-light text-sm'>{text}</p></>}

        </div>
    )


}

export default MyBookCustomCard
