import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button"

const CancelButton: React.FC = () => {
    return (
        <div className='m-2'>
            <Button variant={'secondary'} className="">
                <Trash2/> Cancel
            </Button>
        </div>
    );
};

export default CancelButton;