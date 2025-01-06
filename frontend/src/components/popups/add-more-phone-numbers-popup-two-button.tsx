import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CustomLabeledInput from "../others/custom-labeled-input"

import { Plus } from 'lucide-react';

export function AddMorePhoneNumbersPopupTwoButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"secondary"} className="w-full">
                    <Plus /> Add more phone numbers
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add a new phone number</DialogTitle>
                    <DialogDescription>
                        Write down the Name and Phone number below and press the add button.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center">
                    <div className="w-full">
                        <CustomLabeledInput label={"Name"} labelBasis={"2/3"} inputBasis={"2/4"}/>
                    </div>
                    <div className="w-full mt-4">
                        <CustomLabeledInput label={"Phone Number"} labelBasis={"2/3"} inputBasis={"2/4"}/>
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
    )
}