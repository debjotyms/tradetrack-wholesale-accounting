import React from 'react';
import { Input } from '../ui/input'; // Adjust the import path as necessary

interface CustomLabeledInputProps {
    label: string;
    labelBasis: string;
    inputBasis: string;
}

const CustomLabeledInput: React.FC<CustomLabeledInputProps> = ({ label = "Default Label"}) => {
    return (
        <div className='flex border-[1px] border-grey-200 flex-row h-10 mx-0 rounded-lg'>
            <div className={`basis-[40%] bg-secondary rounded-s-md flex pl-3 items-center text-sm`}>
                {label}
            </div>
            <Input className={`h-10 shadow-white rounded-s-none border-0 rounded-e-lg basis-[60%]`} />
        </div>
    );
};

export default CustomLabeledInput;