import { NextResponse } from "next/server";
import { FetchAllProducts } from "@/lib/products";

export async function GET() {
  try {
    const products = await FetchAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
