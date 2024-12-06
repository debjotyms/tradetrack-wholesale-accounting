import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

const Playground: React.FC = () => {
  return (
    <>
      <div className='h-16 bg-black m-2 rounded-md'>
        <div className='h-16 flex justify-center items-center text-lg'>
          <span className='text-white font-bold'>Playground</span>
        </div>
      </div>

      {/* Write you code here. Don't push this file. */}
      <div className='flex flex-row border-0 border-red-500 h-10 mx-2 rounded-md'>
        <div className='basis-1/4 bg-slate-200 rounded-s-md flex pl-3 items-center'>Category Name</div>
        <Input className='h-10 rounded-s-none basis-3/4'></Input>
      </div>
    </>

  );
};

export default Playground;