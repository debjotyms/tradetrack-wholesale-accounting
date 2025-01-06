"use client";

import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown, Download, Edit, MoveRight, Trash2} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {DeleteConfirmationPopupButton} from "@/components/popups/delete-confirmation-popup-button";
import AddButton from "@/components/buttons/add-button";
import {AddStockPopUpButton} from "@/components/popups/add-stock-popup-button";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StockProduct = {
  categoryName: string;
};

export const suppliersColumns: ColumnDef<StockProduct>[] = [
  {
    id: "select",
    header: ({table}) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({row}) => (
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
    accessorKey: "categoryName",
    header: ({column}) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Stakeholders Category
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({row}) => {
      const file = row.original;
      return (
        <div className="flex justify-center space-x-2">
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              await fetch(`/api/stakeholders-category?categoryName=${encodeURIComponent(file.categoryName)}`, {
                method: "DELETE",
              });
              // Optionally trigger a refresh or re-fetch here
            }}>
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/suppliers/suppliers-subpage`}>
              <MoveRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
