import { Card, Button } from "@shopify/polaris";
import React, { useState } from "react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export function ImagesCard() {
  const [products, setProducts] = useState();
  const fetch = useAuthenticatedFetch();

  const fetchProducts = async (shopName, accessToken) => {
    console.log("Fetching All products from store");
    const response = await fetch("/api/products");
    if (response.ok) {
      console.log(response);
    }
  };

  return (
    <>
      <Card>
        <h1>Suggested Color Pallete</h1>
        <Button onClick={fetchProducts}>Generate</Button>
      </Card>
    </>
  );
}
