import AddButton from "@/components/buttons/add-button";
import CancelButton from "@/components/buttons/cancel-button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='h-12 bg-black m-2 rounded-md'>
        <div className='h-12 flex justify-center items-center text-lg'>
          <span className='text-white font-bold'>Buttons</span>
        </div>
      </div>

      <div className="flex items-center flex-col">
        <AddButton text="Add me please!"/>
        <CancelButton/>
      </div>
      
      <div className='h-12 bg-black m-2 rounded-md mt-10'>
        <div className='h-12 flex justify-center items-center text-lg'>
          <span className='text-white font-bold'>Pop-ups</span>
        </div>
      </div>  
    </>
  );
}
