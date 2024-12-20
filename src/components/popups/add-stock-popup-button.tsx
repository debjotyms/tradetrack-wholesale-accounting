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

import {Ellipsis, Plus} from "lucide-react";
import {AddMorePhoneNumbersPopupTwoButton} from "./add-more-phone-numbers-popup-two-button";

export function AddStockPopUpButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} className="h-10 w-full">
            {/* Lucid 3 dot icon */}
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Stock Quantity</DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <CustomLabeledInput label={"Value"} labelBasis={"2/3"} inputBasis={"2/4"} />
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
