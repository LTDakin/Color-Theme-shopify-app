import { Card, Text, Button } from "@shopify/polaris";
import React from "react";

async function fetchProducts() {
  console.log("hello world");
}

export function ImagesCard() {
  return (
    <>
      <Card padding="500">
        Items that are being used to generate the color palletes
        <Button onClick={fetchProducts}>Fetch Products</Button>
      </Card>
    </>
  );
}
