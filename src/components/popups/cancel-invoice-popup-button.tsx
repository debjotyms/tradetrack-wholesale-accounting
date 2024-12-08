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
import { Trash2 } from 'lucide-react';
import CustomLabeledInput from "../others/custom-labeled-input"

export function CancelInvoicePopupButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">
                    <Trash2/> Cancel
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Cancel Invoice?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to cancel this invoice?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <div className="flex flex-row-reverse w-full space-x-2 space-x-reverse">
                            <Button variant="default">Yes</Button>
                            <Button variant="secondary">Cancel</Button>
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}