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
import {
  MoreHorizontal,
  Trash,
  Eye,
  Link as LinkIcon,
  TrendingDown,
  TrendingUp,
  Plus,
  ChevronRight,
  Coins,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatCurrency } from "@/lib/currency";
import { SheetAddAsset, sheetAddControl } from "./sheet-addasset";
import { sheetDetailControl, SheetDetailAsset } from "./sheet-detail";
import Link from "next/link";

export type AssetsProps = {} & any;

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
        <Button variant="outline" onClick={sheetAddControl.open}>
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
      <SheetAddAsset />
      <SheetDetailAsset />
    </div>
  );
};

const columns: ColumnDef<AssetsProps>[] = [
  /* {
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
  }, */
  {
    accessorKey: "operation",
    header: () => <div className="flex justify-center">Op.</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                className={`py-1 px-2  ${
                  row.getValue("operation") === "short"
                    ? "bg-rose-700/[.2]"
                    : "bg-emerald-700/[.2]"
                } rounded-sm`}
              >
                {row.getValue("operation") === "short" ? (
                  <TrendingDown className="text-rose-700" size={16} />
                ) : (
                  <TrendingUp className="text-emerald-700" size={16} />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>{row.getValue("operation")}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "symbol",
    header: () => <div className="flex justify-center">Simb.</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("symbol")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  /*  {
    accessorKey: "current_value",
    header: "Valor Atual",
  }, */
  {
    accessorKey: "buy_value",
    // header: "Valor Compra",
    header: () => <div className="flex justify-center">Valor Compra</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        {formatCurrency(row.getValue("buy_value"))}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    // header: "Qtd.",
    header: () => <div className="flex justify-center">Qtd.</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "total_buy",
    header: () => <div className="flex justify-center">Total Compra</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        {formatCurrency(row.getValue("total_buy"))}
      </div>
    ),
  },
  {
    accessorKey: "total_current",
    header: () => <div className="flex justify-center">Total Atual</div>,
    cell: ({ row }) => (
      <div
        className={`flex justify-center ${
          Number(row.getValue("total_current")) > 0
            ? "text-emerald-400"
            : "text-rose-400"
        }`}
      >
        {formatCurrency(row.getValue("total_current"))}
      </div>
    ),
  },
  {
    accessorKey: "profit_loss",
    header: () => <div className="flex justify-center ">Profit/Loss</div>,
    cell: ({ row }) => (
      <div
        className={`flex justify-center font-semibold ${
          Number(row.getValue("profit_loss")) > 0
            ? "text-emerald-400"
            : "text-rose-400"
        }`}
      >
        {formatCurrency(row.getValue("profit_loss"))}
      </div>
    ),
  },
  {
    accessorKey: "percentage",
    header: () => <div className="flex justify-center">PNL</div>,
    cell: ({ row }) => (
      <div
        className={`flex justify-center font-bold ${
          Number(row.getValue("percentage")) > 0
            ? "text-emerald-400"
            : "text-rose-400"
        }`}
      >
        {(Number(row.getValue("percentage")) * 100).toFixed(1)}%
      </div>
    ),
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
            <Link
              href="https://www.coingecko.com/en/coins/bitcoin"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                <LinkIcon size={16} className="mr-2" />
                CoinGecko
              </DropdownMenuItem>
            </Link>

            <DropdownMenuItem onClick={() => sheetDetailControl.open()}>
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
