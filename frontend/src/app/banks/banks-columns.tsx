"use client";

import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown, Edit, MoveRight, Trash2} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {DeleteConfirmationPopupButton} from "@/components/popups/delete-confirmation-popup-button";
import AddButton from "@/components/buttons/add-button";
import {AddStockPopUpButton} from "@/components/popups/add-stock-popup-button";
import {Arrow} from "@radix-ui/react-dropdown-menu";
import {api_with_token} from "@/lib/api-requests";
import {useRouter} from "next/navigation";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StockProduct = {
  bankName: string;
  hotline: string;
  website: string;
  branchName: string;
};

export const stockColumns: ColumnDef<StockProduct>[] = [
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
    accessorKey: "bankName",
    header: ({column}) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Bank Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "hotline",
    header: ({column}) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Hotline
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "website",
    header: ({column}) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Website
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "branchname",
    header: ({column}) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Branch Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "delete",
    header: "",
    cell: ({row}) => {
      const router = useRouter();

      const handleDelete = async () => {
        try {
          // Make the API call to delete the bank
          await api_with_token.post("/bank/delete", {
            bankName: row.original.bankName,
            hotline: row.original.hotline,
            website: row.original.website,
          });

          // Refresh the page by navigating to the same route
          // if (router.asPath) {
          //   router.push(router.asPath); // Ensure router.asPath is valid
          // } else {
          //   router.push("/banks/"); // Fallback to home or a known valid route
          // }
        } catch (err) {
          console.error("Error deleting bank:", err);
        }
      };

      return (
        <Button variant="ghost" onClick={handleDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({row}) => {
      const file = row.original;
      return (
        <div className="flex justify-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/banks/bankName`}>
              <MoveRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
