import React from 'react';
import { Ban } from 'lucide-react';
import { Button } from "@/components/ui/button"

const CancelButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <Ban/> Cancel
            </Button>
        </div>
    );
};

export default CancelButton;