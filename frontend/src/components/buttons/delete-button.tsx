import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button"

const DeleteButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <Trash2/> Delete
            </Button>
        </div>
    );
};

export default DeleteButton;