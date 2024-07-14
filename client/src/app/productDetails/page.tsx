"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById } from "@/app/api/product/route";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    if (id) {
      const loadProduct = async () => {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      };

      loadProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <Image
          src={product?.product_image}
          alt={product?.name}
          width={500}
          height={500}
        />
      </div>
      <div className="product-details">
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <div className="product-price">
          {product?.current_price && (
            <span className="original-price">${product?.current_price}</span>
          )}
          <span className="sale-price">${product?.current_price}</span>
        </div>
        <div className="product-rating">
          {Array.from({ length: product.rating }, (_, i) => (
            <Image
              key={i}
              src="/images/Star-Icon.png"
              alt="star"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
