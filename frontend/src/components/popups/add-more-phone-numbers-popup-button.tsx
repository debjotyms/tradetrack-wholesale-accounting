import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomLabeledInput from "../others/custom-labeled-input";

import {Ellipsis} from "lucide-react";
import {AddMorePhoneNumbersPopupTwoButton} from "./add-more-phone-numbers-popup-two-button";

export function AddMorePhoneNumbersPopupButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} className="h-10 w-full">
            {/* Lucid 3 dot icon */}
            <Ellipsis /> Add More Phone Numbers
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add More Phone Numbers</DialogTitle>
            <DialogDescription>
              To add a new phone number, plese click the Add more phone numbers button.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <CustomLabeledInput label={"Main Phone"} labelBasis={"2/3"} inputBasis={"2/4"} />
            </div>
            <div className="w-full mt-4">
              <CustomLabeledInput label={"Brother's Phone"} labelBasis={"2/3"} inputBasis={"2/4"} />
            </div>
            <div className="w-full mt-4">
              <AddMorePhoneNumbersPopupTwoButton />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="flex flex-row-reverse w-full space-x-2 space-x-reverse">
                <Button>Add</Button>
                <Button variant="secondary">Cancel</Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
