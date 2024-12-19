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

export function AddMoreProductsPopupButton() {
  return (
    <div className="mx-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-9 w-full bg-blue-500">
            {/* Lucid 3 dot icon */}
            + Add More Products
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add More Products</DialogTitle>
            <DialogDescription>
              To add a new product, please fill in the details below.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <CustomLabeledInput label={"Company"} labelBasis={"2/3"} inputBasis={"2/4"} />
            </div>
            <div className="w-full mt-4">
              <CustomLabeledInput label={"Product ID"} labelBasis={"2/3"} inputBasis={"2/4"} />
            </div>
            <div className="w-full mt-4">
              <CustomLabeledInput label={"Category"} labelBasis={"2/3"} inputBasis={"2/4"} />
            </div>
            <div className="w-full mt-4">
              <CustomLabeledInput label={"Model no."} labelBasis={"2/3"} inputBasis={"2/4"} />
            </div>
            <div className="w-full mt-4">
              <CustomLabeledInput label={"Stock Available"} labelBasis={"2/3"} inputBasis={"2/4"} />
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
