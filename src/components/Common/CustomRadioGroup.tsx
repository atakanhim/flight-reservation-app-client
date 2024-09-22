/* eslint-disable */

import React, { useState } from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import CustomFormControlLabel from './CustomFormControlLabel';
import { RadioItems } from '../../types/interfaces';




interface CustomRadioGroupProps {
    radioItems: RadioItems[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeValue: string;
    title: string;

}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({ onChangeValue, onChange, title, radioItems }) => {
    return (
        <FormControl component="fieldset">
            <p className='font-bold text-sm'>{title}</p>
            <RadioGroup
                aria-label="arrival-time"
                name="arrival-time"
                value={onChangeValue}
                onChange={onChange}
            >
                {radioItems.map((data, index) => (
                    <div key={data.id} className='flex flex-row justify-between w-full items-center'>
                        <CustomFormControlLabel
                            key={index} // Her bir radio butonunu benzersiz kılmak için
                            value={data.value}
                            label={data.label} // İlgili etiket
                        />
                        <p className='text-xs mt-2'>{data.price ? "$" + data.price : ""}</p>
                    </div>

                ))}

            </RadioGroup>
        </FormControl>
    );
};

export default CustomRadioGroup;