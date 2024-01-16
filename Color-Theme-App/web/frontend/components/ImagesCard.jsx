import { Card, Text, Button } from "@shopify/polaris";
import React, { useState } from "react";

const fetchProducts = async (shopName, accessToken) => {
  try {
    const response = await fetch(
      `https://${shopName}.myshopify.com/admin/api/2023-10/products.json`,
      {
        headers: {
          "X-Shopify-Storefront-Access-Token": accessToken,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    setProducts(data.products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
};

export function ImagesCard() {
  const [products, setProducts] = useState();

  return (
    <>
      <Card>
        <h1>Suggested Color Pallete</h1>
        <Button onClick={fetchProducts}>Generate</Button>
      </Card>
    </>
  );
}
