import { DataTable } from '@/components/ui/data-table'
import { getAllProductsWithVariantColorsSizes } from '@/lib/helper/getAllProductsWithVariantColorsSizes';
import React from 'react'
import { columns, Product } from './components/columns';

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  const products = await getAllProductsWithVariantColorsSizes();

  return products.map(product => ({
    id: product.id,
    image: product.ProductVariantColor.map((variantColor) => variantColor.images)[0][0],
    name: product.name,
    category: product.Category.name,
    variants: product.ProductVariantColor.map(color => ({
      color: color.color,
      sizes: color.ProductVariantSize.map(size => ({
        size: size.size,
        stock: size.stock,
        status: size.status,
      })),
    })),
  })) as Product[];
}

const InventoryPage = async () => {

  const data = await getData();

  return (
    <section>
        <DataTable data={data} columns={columns}/>
    </section>
  )
}

export default InventoryPage