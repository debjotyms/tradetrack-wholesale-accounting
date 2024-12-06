import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';

const FiltersButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <Filter /> Filter
            </Button>
        </div>
    );
};

export default FiltersButton;