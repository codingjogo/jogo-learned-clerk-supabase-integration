'use server';

import prisma from "../db";


export async function getAllProductsWithVariantColorsSizes() {
    const products = await prisma.product.findMany({
        include: {
            Category: true,
            ProductVariantColor: {
                include: {
                    ProductVariantSize: true
                }
            }
        }
    });

    return products;
}