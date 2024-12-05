import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const Playground: React.FC = () => {
  return (
    <>
      {/* <div className='h-16 bg-black m-2 rounded-md'>
        <div className='h-16 flex justify-center items-center text-lg'>
          <span className='text-white font-bold'>Playground</span>
        </div>
      </div> */}

      {/* Write you code here. Don't push this file. */}
      <div className='flex'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
      </div>
    </>

  );
};

export default Playground;