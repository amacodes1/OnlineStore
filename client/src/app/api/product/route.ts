import { FetchAllProducts, FetchProductById } from "@/lib/products";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Check if product ID is provided in the query parameters
      const { id } = req.query;

      if (id) {
        // Fetch a single product by ID
        const product = await FetchProductById(id as string);
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } else {
        // Fetch all products
        const products = await FetchAllProducts();
        res.status(200).json(products);
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
