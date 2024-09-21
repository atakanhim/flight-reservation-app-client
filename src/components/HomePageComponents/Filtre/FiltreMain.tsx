import React from 'react'
import FiltreSortBy from './FiltreSortBy'
import FiltreRadioBoxs from './FiltreRadioBoxs'

export default function FiltreMain() {
    return (
        <div className='border-white border w-full p-3'>
            <FiltreSortBy />
            <FiltreRadioBoxs />
        </div>
    )
}
