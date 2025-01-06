import React from 'react';
import { Button } from "@/components/ui/button"
import { Save } from 'lucide-react';

const SaveButton: React.FC = () => {
    return (
        <div className=''>
            <Button className="">
                <Save/> Save
            </Button>
        </div>
    );
};

export { SaveButton };