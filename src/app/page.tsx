import AddButton from "@/components/buttons/add-button";
import CancelButton from "@/components/buttons/cancel-button";
import DeleteButton from "@/components/buttons/delete-button";
import EditButton from "@/components/buttons/edit-button";
import ForwardButton from "@/components/buttons/forward-button";
import { SavePrintButton } from "@/components/buttons/save-and-print-button";
import { SaveButton } from "@/components/buttons/save-button";
import { AddCategoryPopupButton } from "@/components/popups/add-category-popup-button";
import { DeleteConfirmationPopupButton } from "@/components/popups/delete-confirmation-popup-button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='h-16 bg-black m-2 rounded-md'>
        <div className='h-16 flex justify-center items-center text-lg'>
          <span className='text-white font-bold'>Buttons</span>
        </div>
      </div>

      <div className="flex items-center flex-col space-y-2">
        <AddButton text="Add me please!"/>
        <CancelButton/>
        <DeleteButton/>
        <EditButton/>
        <ForwardButton/>
        <SaveButton/>
        <SavePrintButton/>
      </div>
      
      <div className='h-16 bg-black m-2 rounded-md mt-10'>
        <div className='h-16 flex justify-center items-center text-lg'>
          <span className='text-white font-bold'>Pop-ups</span>
        </div>
      </div>  

      <div className="flex items-center flex-col space-y-2">
        <AddCategoryPopupButton/>
        <DeleteConfirmationPopupButton/>
      </div>
    </>
  );
}
