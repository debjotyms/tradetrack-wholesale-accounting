import React from 'react';
import { Input } from '../ui/input'; // Adjust the import path as necessary

interface CustomLabeledInputProps {
    label: string;
    labelBasis: string;
    inputBasis: string;
    value?: string; // Add the value prop
}

const CustomLabeledInput: React.FC<CustomLabeledInputProps> = ({ label = "Default Label", value = "" }) => {
    return (
        <div className='flex border-[1.5px] flex-row h-10 mx-0 rounded-lg'>
            <div className={`basis-[40%] bg-secondary rounded-s-md flex pl-3 items-center text-sm text-[#6B7280]`}>
                {label}
            </div>
            <Input
                className={`h-[37.5px] rounded-s-none border-0 rounded-e-lg basis-[60%]`}
                defaultValue={value}
            />
        </div>
    );
};

export default CustomLabeledInput;