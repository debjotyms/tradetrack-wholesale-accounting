import { Trash2 } from "lucide-react"

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
import CancelButton from "../buttons/cancel-button"
import { subscribe } from "diagnostics_channel"

export function DeleteConfirmationPopupButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">
                    <Trash2/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this item? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <div className="flex flex-row-reverse w-full space-x-2 space-x-reverse">
                            <Button variant="destructive">
                                Yes
                            </Button>
                            <Button variant={"secondary"}>
                                Cancel
                            </Button>
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}