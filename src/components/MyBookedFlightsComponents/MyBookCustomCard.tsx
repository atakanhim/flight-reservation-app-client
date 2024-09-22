
const MyBookCustomCard = ({ price, text }: { price?: number, text?: string } = {}) => {
    return (

        <div className={`border flex flex-col justify-center items-center border-gray-300 rounded-xl gap-2 sm:gap-4 ${!text && !price && 'bg-gray-100'} h-20 w-14  sm:h-24 sm:w-16`}>
            {price && text && <>  <p className='font-bold sm:text-2xl'>${price}</p>
                <p className='font-light text-xs sm:text-sm overflow-hidden '>{text}</p></>}

        </div>
    )


}

export default MyBookCustomCard
