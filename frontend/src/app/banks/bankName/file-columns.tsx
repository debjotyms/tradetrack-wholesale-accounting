"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
// import { MoreHorizontal } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import DeleteButton from "@/components/buttons/delete-button";
import { DeleteConfirmationPopupButton } from "@/components/popups/delete-confirmation-popup-button";
import AddButton from "@/components/buttons/add-button";
import { AddStockPopUpButton } from "@/components/popups/add-stock-popup-button";
<<<<<<< HEAD:frontend/src/app/banks/bankName/file-columns.tsx
import ForwardButton from "@/components/buttons/forward-button";
=======
>>>>>>> c60b5d9721f54e9065df65d39fc701cb2cefb03c:src/app/stocks/stock-columns.tsx

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StockProduct = {
  name: string;             // Account holder's name
  accountNo: number;        // Account number as a string for flexibility with large numbers
  accountType: string;      // Type of account: Savings or Current
  district: string;         // District name
  subDistrict: string;      // Sub-district name
  date: string;             // Date in YYYY-MM-DD format
  addedBy: string; 
};

export const stockColumns: ColumnDef<StockProduct>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "accountNo",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Accoubt no.
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "accountType",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Account Type
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "district",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        District
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "subDistrict",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Sub-district 
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Date Added 
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
 {
    accessorKey: "addedBy",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Added by
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "add",
    cell: ({ row }) => {
      const product = row.original;
      return <AddStockPopUpButton/>;
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const product = row.original;
      return <DeleteConfirmationPopupButton />;
    },
  },
  {
    id: "forward",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Button variant="ghost" size="sm" asChild>
            <Link href={`/banks/bankName/bankTransaction`}>
              <MoveRight className="h-4 w-4" />
            </Link>
          </Button>
      );
    },
  },

];