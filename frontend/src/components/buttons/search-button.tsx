import React from 'react';
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react';

const SearchButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <Search/>
            </Button>
        </div>
    );
};

export default SearchButton;