import React from 'react';
import { Button } from "@/components/ui/button"
import { Printer } from 'lucide-react';

const SavePrintButton: React.FC = () => {
    return (
        <div className=''>
            <Button className="">
                <Printer/> Save & Print
            </Button>
        </div>
    );
};

export { SavePrintButton };