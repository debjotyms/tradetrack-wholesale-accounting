import { Copy } from "lucide-react"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddButton from "../buttons/add-button"
import PictureFrame from "../others/picture-frame"
import CancelButton from "../buttons/cancel-button"
import CustomLabeledInput from "../others/custom-labeled-input"

export function AddCategoryPopupButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddButton text="Add Category"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Write down the category name below, upload a photo, and press the add button.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
            <PictureFrame/>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <CustomLabeledInput label={"Category Name"} labelBasis={"[50%]"} inputBasis={"[50%]"}/>
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
