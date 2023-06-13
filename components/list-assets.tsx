import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MoreHorizontal, Trash, Eye, Link } from "lucide-react";

export type AssetsProps = {
  id: string;
  amount: number;
  enableSorting: boolean;
  enableHiding: boolean;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const columns: ColumnDef<AssetsProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    accessorKey: "operation",
    header: "Operação",
  },
  {
    accessorKey: "symbol",
    header: "Simb.",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "current_value",
    header: "Valor Atual",
  },
  {
    accessorKey: "buy_value",
    header: "Valor Compra",
  },
  {
    accessorKey: "amount",
    header: "Quantidade",
  },
  {
    accessorKey: "total_current",
    header: "Total Atual",
  },
  {
    accessorKey: "total_buy",
    header: "Total Compra",
  },

  {
    accessorKey: "percentage",
    header: "Porcentagem",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              <Link size={16} className="mr-2" />
              CoinGecko
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Eye size={16} className="mr-2" />
              Ver detalhes
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-300 focus:bg-rose-500">
              <Trash size={16} className="mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const ListAssets = ({ assets }: { assets: AssetsProps[] }) => {
  const table = useReactTable({
    data: assets,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  });

  return (
    <div className="lg:col-span-4 lg:border-l p-2 rounded-md border mt-6">
      <div className="flex flex-row  items-center justify-between m-2  mb-6">
        <Input className="w-2/5" placeholder="Search..." />
        <Button variant="outline" onClick={() => console.log("yes")}>
          Adicionar
        </Button>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
