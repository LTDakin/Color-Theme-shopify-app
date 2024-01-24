import { Card, Button } from "@shopify/polaris";
import React, { useState } from "react";

export function ImagesCard() {
  const [products, setProducts] = useState();

  const fetchProducts = async (shopName, accessToken) => {
    // make a call to the app node js for the images of the products
    // I dont think that you can call the admin api from the react code
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
