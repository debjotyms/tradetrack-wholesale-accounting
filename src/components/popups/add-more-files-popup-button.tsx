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

import {Plus} from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AddMoreFilesPopUpButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white w-full">
          <Plus /> Add file
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a file</DialogTitle>
          <DialogDescription>Select a file from your computer to upload.</DialogDescription>
        </DialogHeader>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">File</Label>
          <Input id="picture" type="file" />
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
  );
}
