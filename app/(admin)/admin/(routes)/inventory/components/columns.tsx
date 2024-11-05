"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ColumnDef } from "@tanstack/react-table";
import { CldImage } from "next-cloudinary";

import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
	id: string;
	image: string;
	name: string;
	category: string;
	variants: {
		color: string;
		sizes: {
			size: string;
			stock: number;
			status: string;
		}[];
	}[];
};

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: "image",
		header: "Image",
		cell: ({ row }) => {
			<div className="relative w-24 h-24">
				<AspectRatio ratio={16 / 9}>
					<CldImage
						src={row.original.image}
						sizes="100vw"
						fill
            className="object-contain"
						alt={`Product-${row.original.image}`}
					/>
				</AspectRatio>
			</div>;
		},
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "category",
		header: "Category",
	},
	{
		accessorKey: "variants",
		header: "Variants",
		cell: ({ row }) => (
			<div>
				{row.original.variants.map((variant, index) => (
					<div key={index}>
						<strong>Color:</strong> {variant.color}
						{variant.sizes.map((size, idx) => (
							<div key={idx}>
								Size: {size.size}, Stock: {size.stock}, Status:{" "}
								{size.status}
							</div>
						))}
					</div>
				))}
			</div>
		),
	},
	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
		  const payment = row.original
	 
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
				  Copy payment ID
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>View customer</DropdownMenuItem>
				<DropdownMenuItem>View payment details</DropdownMenuItem>
			  </DropdownMenuContent>
			</DropdownMenu>
		  )
		},
	  },
];
