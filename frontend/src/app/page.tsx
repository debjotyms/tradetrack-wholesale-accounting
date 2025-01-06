import AddButton from "@/components/buttons/add-button";
import CancelButton from "@/components/buttons/cancel-button";
import DeleteButton from "@/components/buttons/delete-button";
import EditButton from "@/components/buttons/edit-button";
import FiltersButton from "@/components/buttons/filters-button";
import ForwardButton from "@/components/buttons/forward-button";
import {SavePrintButton} from "@/components/buttons/save-and-print-button";
import {SaveButton} from "@/components/buttons/save-button";
import SearchButton from "@/components/buttons/search-button";
import UndoButton from "@/components/buttons/undo-button";
import BalanceCard from "@/components/others/balance-card";
import DateDisplay from "@/components/others/date-display";
import {AddCategoryPopupButton} from "@/components/popups/add-category-popup-button";
import {AddMorePhoneNumbersPopupButton} from "@/components/popups/add-more-phone-numbers-popup-button";
import { CancelInvoicePopupButton } from "@/components/popups/cancel-invoice-popup-button";
import {DeleteConfirmationPopupButton} from "@/components/popups/delete-confirmation-popup-button";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4">
      
      <div className="h-16 bg-black rounded-md mb-2">
        <div className="h-16 flex justify-center items-center text-lg">
          <span className="text-white font-bold">Buttons</span>
        </div>
      </div>

      <div className="flex items-center flex-col space-y-2">
        <AddButton text="Add me please!" />
        <CancelButton />
        <DeleteButton />
        <EditButton />
        <FiltersButton />
        <ForwardButton />
        <SaveButton />
        <SavePrintButton />
        <SearchButton />
        <UndoButton />
        <DateDisplay />
        <BalanceCard title="Clients Balance" balance={0} credit={0} debit={0} />
      </div>

      <div className="h-16 bg-black rounded-md mt-10 mb-2">
        <div className="h-16 flex justify-center items-center text-lg">
          <span className="text-white font-bold">Pop-ups</span>
        </div>
      </div>

      <div className="flex items-center flex-col space-y-2">
        <AddCategoryPopupButton />
        <DeleteConfirmationPopupButton />
        <AddMorePhoneNumbersPopupButton />
        <CancelInvoicePopupButton />
      </div>
    </div>
  );
}
