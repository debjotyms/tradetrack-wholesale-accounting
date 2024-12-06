import React from 'react';
import { Input } from '../ui/input'; // Adjust the import path as necessary

interface CustomLabeledInputProps {
    label: string;
    labelBasis: string;
    inputBasis: string;
}

const CustomLabeledInput: React.FC<CustomLabeledInputProps> = ({ label = "Default Label", labelBasis = "1/3", inputBasis = "2/3" }) => {
    return (
        <div className='flex flex-row h-10 mx-2 rounded-lg'>
            <div className={`basis-${labelBasis} bg-slate-200 rounded-s-md flex pl-3 items-center text-sm text-gray-600`}>
                {label}
            </div>
            <Input className={`h-10 rounded-s-none rounded-e-lg basis-${inputBasis}`} />
        </div>
    );
};

export default CustomLabeledInput;