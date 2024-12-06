import React from 'react';
import { Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button"

const EditButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <Pencil/>
            </Button>
        </div>
    );
};

export default EditButton;