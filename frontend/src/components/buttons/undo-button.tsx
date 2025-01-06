import React from 'react';
import { Button } from "@/components/ui/button";
import { Undo } from 'lucide-react';

const UndoButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <Undo/>
            </Button>
        </div>
    );
};

export default UndoButton;