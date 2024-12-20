import React from 'react';
import { Input } from '../ui/input'; // Adjust the import path as necessary

interface CustomLabeledInputProps {
    label: string;
    labelBasis: string;
    inputBasis: string;
}

const CustomLabeledInputBig: React.FC<CustomLabeledInputProps> = ({ label = "Default Label"}) => {
    return (
        <div className='flex border-[1.5px] flex-col h-full mx-0 rounded-lg'>
            <div className={`basis-[17%] bg-secondary rounded-t-md flex justify-center items-center text-sm text-[#6B7280] h-full`}>
            {label}
            </div>
            <Input className={`rounded-s-none border-0 rounded-e-lg basis-[83%] h-full`} />
        </div>
    );
};

export default CustomLabeledInputBig;