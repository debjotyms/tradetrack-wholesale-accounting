import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

const ForwardButton: React.FC = () => {
    return (
        <div className=''>
            <Button variant={'secondary'} className="">
                <ArrowRight/>
            </Button>
        </div>
    );
};

export default ForwardButton;